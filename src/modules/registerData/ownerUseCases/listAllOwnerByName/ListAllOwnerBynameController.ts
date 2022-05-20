import { Request, Response } from "express";
import { ListAllOwnerByNameUseCase } from "./ListAllOwnerBynameUseCase";
import { container } from "tsyringe";

class ListAllOwnerByNameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllOwnerByNameUseCase = container.resolve(ListAllOwnerByNameUseCase);

    const ownerByName = await listAllOwnerByNameUseCase.execute();

    return response.json(ownerByName);
  }
}

export { ListAllOwnerByNameController };
