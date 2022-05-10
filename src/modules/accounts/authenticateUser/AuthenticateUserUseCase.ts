import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { IUsersTokensRepository } from "../repositories/implementations/IUsersTokensRepository";
import auth from "../../../config/auth";
import { AppError } from "../../../database/errors/AppError";
import { IDateProvider } from "../../../shared/container/providers/implementations/IDateProvider";

interface IRequest {
  login: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    login: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("UsersTokensRepository")
    private usersTokensRepository: IUsersTokensRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider,
  ) {}

  async execute({ login, password }: IRequest) {
    const user = await this.usersRepository.findByLogin(login);
    const { secret_token } = auth;

    if (!user) {
      throw new AppError("Login or password incorrect!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Login or password incorrect!");
    }

    const token = sign({}, secret_token, {
      subject: user.id,
    });

    await this.usersTokensRepository.create({
      user_id: user.id,
    });

    return {
      token,
      user: {
        name: user.name,
        login: user.login,
      },
    };
  }
}

export { AuthenticateUserUseCase };
