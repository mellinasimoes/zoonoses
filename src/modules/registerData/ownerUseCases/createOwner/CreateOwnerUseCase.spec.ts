import { AppError } from "../../../../database/errors/AppError";
import { OwnerRepositoryInMemory } from "../../repositories/implementations/in-memory/OwnerRepositoryInMemory";
import { CreateOwnerUseCase } from "./CreateOwnerUseCase";

let createOwnerUseCase: CreateOwnerUseCase;
let ownerRepositoryInMemory: OwnerRepositoryInMemory;

describe("Create Owner", () => {
  beforeEach(() => {
    ownerRepositoryInMemory = new OwnerRepositoryInMemory();
    createOwnerUseCase = new CreateOwnerUseCase(ownerRepositoryInMemory);
  });

  it("Should be able to create a new owner", async () => {
    const owner = await createOwnerUseCase.execute({
      name: "João da Silva",
      cpf: "254.856.854-47",
      rg: "88.985.456-74",
      birth_date: new Date("25-07-1981"),
      address: "Rua das Palmeiras, número 35",
      city: "Nantes",
      phone_number: "(18)997586235",
    });

    expect(owner).toHaveProperty("id");
  });

  it("Should not be able to create a new owner with same cpf", async () => {
    const owner = {
      name: "João Souza",
      cpf: "254.856.854-47",
      rg: "88.985.456-74",
      birth_date: new Date("25-07-1981"),
      address: "Rua das Palmeiras, número 35",
      city: "Nantes",
      phone_number: "(18)997586235",
    };

    await createOwnerUseCase.execute({
      name: owner.name,
      cpf: owner.cpf,
      rg: owner.rg,
      birth_date: owner.birth_date,
      address: owner.address,
      city: owner.city,
      phone_number: owner.phone_number,
    });

    await expect(
      createOwnerUseCase.execute({
        name: owner.name,
        cpf: owner.cpf,
        rg: owner.rg,
        birth_date: owner.birth_date,
        address: owner.address,
        city: owner.city,
        phone_number: owner.phone_number,
      }),
    ).rejects.toEqual(new AppError("CPF already exists!"));
  });

  it("Should not be able to create a new owner with same rg", async () => {
    const owner = {
      name: "João Souza",
      cpf: "254.856.854-47",
      rg: "88.985.456-74",
      birth_date: new Date("25-07-1981"),
      address: "Rua das Palmeiras, número 35",
      city: "Nantes",
      phone_number: "(18)997586235",
    };

    await createOwnerUseCase.execute({
      name: owner.name,
      cpf: owner.cpf,
      rg: owner.rg,
      birth_date: owner.birth_date,
      address: owner.address,
      city: owner.city,
      phone_number: owner.phone_number,
    });

    await expect(
      createOwnerUseCase.execute({
        name: owner.name,
        cpf: owner.cpf,
        rg: owner.rg,
        birth_date: owner.birth_date,
        address: owner.address,
        city: owner.city,
        phone_number: owner.phone_number,
      }),
    ).rejects.toEqual(new AppError("RG already exists!"));
  });
});
