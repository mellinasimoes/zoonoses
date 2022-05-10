import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";
import { User } from "../../entities/User";


class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];
  
  async create({login,name,password}: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user,{
      login,
      name,
      password
    });

    this.users.push(user)

  }
  async findByLogin(login: string): Promise<User> {
    return this.users.find((user)=> user.login === login);
  }
  async findById(id: string): Promise<User> {
    return this.users.find((user)=> user.id === id);
  }
}

export { UsersRepositoryInMemory };