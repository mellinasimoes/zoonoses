import { getRepository, Repository } from "typeorm";
import { ICreateUserTokenDTO } from "../../dtos/ICreateUserTokenDTO";
import { UserTokens } from "../../entities/UserTokens";
import { IUsersTokensRepository } from "./IUsersTokensRepository";

class UsersTokensRepository implements IUsersTokensRepository {
  private repository: Repository<UserTokens>;

  constructor() {
    this.repository = getRepository(UserTokens);
  }

  async create({ user_id }: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = this.repository.create({
      user_id,
    });

    await this.repository.save(userToken);
    return userToken;
  }
  async findByUserId(user_id: string): Promise<UserTokens> {
    return await this.repository.findOne({
      user_id,
    });
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { UsersTokensRepository };
