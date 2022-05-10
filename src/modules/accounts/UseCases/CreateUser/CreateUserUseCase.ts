import { injectable, inject } from "tsyringe";
import { hash } from "bcrypt";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../database/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ name, login, password }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByLogin(login);

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }

    const passwordHash = await hash(password, 8); //Método Hash vai criptografar a senha

    await this.usersRepository.create({
      name,
      login,
      password: passwordHash,
    });
  }
}

export { CreateUserUseCase };
