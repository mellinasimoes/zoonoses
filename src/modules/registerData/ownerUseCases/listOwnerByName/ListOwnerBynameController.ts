import { Request, Response } from "express";
import { ListOwnerByNameUseCase } from "./ListOwnerBynameUseCase";
import { container } from "tsyringe";

class ListOwnerByNameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.headers;

    const listOwnerByNameUseCase = container.resolve(ListOwnerByNameUseCase);

    const ownerByName = await listOwnerByNameUseCase.execute({ name });

    return response.json(ownerByName);
  }
}

export { ListOwnerByNameController };
