import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import createConnection from "./database";
import "./shared/container";
import { AppError } from "./database/errors/AppError";
import { router } from "./routes";

//se der erro ir no arquivo tsconfig.js e colocar resolveJsonModule:true
createConnection();

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    //Verifica se o erro é do tipo AppError
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }
  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`, //Concatenação usa crase pra abrir e pra fechar
  });
});

export { app };
