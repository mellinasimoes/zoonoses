import { IUsersTokensRepository } from "../implementations/IUsersTokensRepository";
import { UserTokens } from "../../entities/UserTokens";
import { ICreateUserTokenDTO } from "../../dtos/ICreateUserTokenDTO";

class UsersTokensRepositoryInMemory implements IUsersTokensRepository {
  usersTokens: UserTokens[] = [];

  async create({ user_id }: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = new UserTokens();

    Object.assign(userToken, {
      user_id,
    });

    this.usersTokens.push(userToken);

    return userToken;
  }

  async findByUserId(user_id: string): Promise<UserTokens> {
    return this.usersTokens.find((ut) => ut.user_id === user_id);
  }
  async deleteById(id: string): Promise<void> {
    const userToken = this.usersTokens.find((ut) => ut.id === id);
    this.usersTokens.splice(this.usersTokens.indexOf(userToken));
  }
}

export { UsersTokensRepositoryInMemory };
