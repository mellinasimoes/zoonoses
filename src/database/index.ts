import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (host="database_zoonoses"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions,{
      host: process.env.NODE_ENV === "test"? "localhost":host, //se o process.env.NODE_ENV for igual a "test" tem que passar o host que está sendo usado, no caso localhost
      database: 
      process.env.NODE_ENV === "test"  //se o env.NODE_ENV for igual a "test" usar o banco de dados "zoonoses_test", do contrario usar o default
        ? "zoonoses_test"
        : defaultOptions.database,
    })
  );   // se o process.env.NODE_ENV for igual a  "test"
};
