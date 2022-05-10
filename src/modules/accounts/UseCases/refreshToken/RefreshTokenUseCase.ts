import { injectable, inject } from "tsyringe";
import { IUsersTokensRepository } from "../../repositories/implementations/IUsersTokensRepository";
import { verify, sign } from "jsonwebtoken";
import { AppError } from "../../../../database/errors/AppError";
import auth from "../../../../config/auth";
import { IDateProvider } from "../../../../shared/container/providers/implementations/IDateProvider";

interface Ipayload {
  sub:string;
  email:string;   
}

interface ITokenResponse {
  token:string;
  refresh_token:string;
}

@injectable()
class RefreshTokenUseCase {
  constructor(
    @inject("UsersTokensRepository")
    private usersTokensRepository: IUsersTokensRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider,
  ){}

  async execute(token:string): Promise<ITokenResponse>{
    const { email, sub } = verify(token, auth.secret_refresh_token) as Ipayload;
    
    const user_id = sub;    // user_id está dento do sub
    
    const userToken = await this.usersTokensRepository.findByUserIdAndRefreshToken(user_id, token);

    if (!userToken) {
      throw new AppError ("Refresh Token does not exists!");
    }

    await this.usersTokensRepository.deleteById(userToken.id);                 


    const refresh_token = sign({email},auth.secret_refresh_token,{            
      subject: sub,
      expiresIn: auth.expires_in_refresh_token,
    });


    const expires_date = this.dateProvider.addDays(auth.expires_refresh_token_days)

    await this.usersTokensRepository.create({
      expires_date,
      refresh_token,
      user_id,
    });

    const newToken = sign({},auth.secret_token,{//chave secreta gerada pelo MD5
      subject: user_id,
      expiresIn: auth.expires_in_token,
    });

    return {
      refresh_token,
      token: newToken
    };
  }
}

export { RefreshTokenUseCase };
