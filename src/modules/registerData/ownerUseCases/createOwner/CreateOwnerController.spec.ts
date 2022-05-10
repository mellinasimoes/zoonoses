import { Connection } from "typeorm";
import createConnection from "../../../../database/index"
import { v4 as uuid } from "uuid";
import { hash } from "bcrypt";
import request from "supertest";
import { app } from "../../../../app";


let connection:Connection;
describe ("Create Owner Controller", () => {
  beforeAll(async () => {                          
    connection = await createConnection();
    await connection.runMigrations();

    const id = uuid();
    const password = await hash("user",8);

    await connection.query(`
      INSERT INTO USERS(id, name,login,password)
        values('${id}','user','user@zoonoses.com.br','${password}')
      `
    );
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();

  })
  it ("should be able to create a new owner", async () => {
    const responseToken = await request(app).post("/sessions").send({
      login:"user@zoonoses.com.br",
      password:"user",
    });

    console.log(responseToken.body);
    

    const {token} = responseToken.body;
    
    const response = await request(app)
    .post("/owner")
    .send({
      name: "João da Silva",
      cpf: "254.856.854-47",
      rg: "88.985.456-74",
      birth_date: new Date("25-07-1981"),
      address: "Rua das Palmeiras, número 35",
      city: "Nantes",
      phone_number: "(18)997586235",
    })
    .set({
      Authorization: `Bearer ${token}`,
    });

    expect(response.status).toBe(201);
    });

  it ("should not be able to create a new owner if CPF already exists", async () => {
    const responseToken = await request(app).post("/sessions").send({
      login:"user@zoonoses.com.br",
      password:"user",
    });

    const {token} = responseToken.body;
    
    const response = await request(app)
    .post("/owner")
    .send({
      name: "João da Silva",
      cpf: "254.856.854-47",
      rg: "88.985.456-74",
      birth_date: new Date("25-07-1981"),
      address: "Rua das Palmeiras, número 35",
      city: "Nantes",
      phone_number: "(18)997586235",
    })
    .set({
      Authorization:`Bearer ${token}`,
    });
    
    console.log(token);
    
    expect(response.status).toBe(400);
  });

  it ("should not be able to create a new owner if RG already exists", async () => {
    const responseToken = await request(app).post("/sessions").send({
      login:"user@zoonoses.com.br",
      password:"user",
    });

    const {token} = responseToken.body;
    
    const response = await request(app)
    .post("/owner")
    .send({
      name: "João da Silva",
      cpf: "254.856.854-77",
      rg: "88.985.456-74",
      birth_date: new Date("25-07-1981"),
      address: "Rua das Palmeiras, número 35",
      city: "Nantes",
      phone_number: "(18)997586235",
    })
    .set({
      Authorization:`Bearer ${token}`,
    });
    
    console.log(token);
    
    expect(response.status).toBe(400);
  });
});
