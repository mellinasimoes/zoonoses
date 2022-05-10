import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAnimalByOwnerIdUseCase } from "./FindAnimalByOwnerIdUseCase";

class FindAnimalByOwnerIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { owner_id } = request.headers;

    const listAnimalByOwnerIdUseCase = container.resolve(FindAnimalByOwnerIdUseCase);

    const animalByOwnerId = await listAnimalByOwnerIdUseCase.execute({ owner_id });

    return response.json(animalByOwnerId);
  }
}

export { FindAnimalByOwnerIdController };
