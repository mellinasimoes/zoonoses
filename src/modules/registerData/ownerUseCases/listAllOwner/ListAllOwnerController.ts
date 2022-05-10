import { Request, Response } from "express";

import { container } from "tsyringe";
import { ListOwnerUseCase } from "./ListAllOwnerUseCase";

class ListOwnerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listOwnerUseCase = container.resolve(ListOwnerUseCase);

    const all = await listOwnerUseCase.execute();

    return response.json(all);
  }
}
export { ListOwnerController };
