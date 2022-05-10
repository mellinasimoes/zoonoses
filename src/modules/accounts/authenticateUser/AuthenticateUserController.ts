import { container } from "tsyringe";
import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, login } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    const token = await authenticateUserUseCase.execute({
      password,
      login,
    });

    return response.json(token);
  }
}

export { AuthenticateUserController };
