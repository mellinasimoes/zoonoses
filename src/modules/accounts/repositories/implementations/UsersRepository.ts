import { Repository, getRepository } from "typeorm";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, login, password, id }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      login,
      password,
      id,
    });

    await this.repository.save(user);
  }

  async findByLogin(login: string): Promise<User> {
    return await this.repository.findOne({ login });
  }

  async findById(id: string): Promise<User> {
    return await this.repository.findOne(id);
  }
}

export { UsersRepository };
