import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListOwnerByCPFUseCase } from "./ListOwnerBynameUseCase";

class ListOwnerByCPFController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.headers;

    const listOwnerByCPFUseCase = container.resolve(ListOwnerByCPFUseCase);

    const ownerByCPF = await listOwnerByCPFUseCase.execute({ cpf });

    return response.json(ownerByCPF);
  }
}

export { ListOwnerByCPFController };
