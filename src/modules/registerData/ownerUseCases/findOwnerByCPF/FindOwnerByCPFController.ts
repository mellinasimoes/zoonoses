import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindOwnerByCPFUseCase } from "./FindOwnerByCPFUseCase";

class FindOwnerByCPFController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.headers;

    const findOwnerByCPFUseCase = container.resolve(FindOwnerByCPFUseCase);

    const ownerByCPF = await findOwnerByCPFUseCase.execute({ cpf });

    return response.json(ownerByCPF);
  }
}

export { FindOwnerByCPFController };
