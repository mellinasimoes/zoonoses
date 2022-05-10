import { Request, Response } from 'express';
import { container } from "tsyringe";
import { FindAnimalByOwnerNameUseCase } from './FindAnimalByOwnerNameUseCase';


class FindAnimalByOwnerNameController{

  async handle(request:Request,response:Response): Promise<Response>{
    const {owner_name}=request.headers;

    const listAnimalByOwnerNameUseCase = container.resolve(FindAnimalByOwnerNameUseCase);

    const animalByOwnerName = await listAnimalByOwnerNameUseCase.execute({owner_name});

    return response.json(animalByOwnerName);  
  }
}

export { FindAnimalByOwnerNameController };
