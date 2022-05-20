import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindOwnerByNameUseCase } from "./FindlOwnerByNameUseCase";

class FindOwnerByNameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.headers;
    const findOwnerByNameUseCase = container.resolve(FindOwnerByNameUseCase);

    const owner = await findOwnerByNameUseCase.execute({ name });

    return response.json(owner);
  }
}
export { FindOwnerByNameController };
