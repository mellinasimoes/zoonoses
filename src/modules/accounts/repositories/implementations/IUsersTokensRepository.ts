import { ICreateUserTokenDTO } from "../../dtos/ICreateUserTokenDTO";
import { UserTokens } from "../../entities/UserTokens";

interface IUsersTokensRepository {
  create({ user_id }: ICreateUserTokenDTO): Promise<UserTokens>;

  findByUserId(user_id: string): Promise<UserTokens>;

  deleteById(id: string): Promise<void>;
}

export { IUsersTokensRepository };
