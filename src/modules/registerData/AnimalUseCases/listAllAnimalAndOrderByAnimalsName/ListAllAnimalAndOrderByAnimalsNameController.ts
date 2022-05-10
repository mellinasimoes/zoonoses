import { Request, Response } from 'express';
import { container } from "tsyringe";
import { ListAllAnimalAndOrderByAnimalsNameUseCase } from './ListAllAnimalAndOrderByAnimalsNameUseCase';

class ListAllAnimalsAndOrderByAnimalsNameController{
  async handle(request:Request,response:Response): Promise<Response>{
 
    const listAllAnimalsAndOrderByAnimalsNameUseCase = container.resolve(ListAllAnimalAndOrderByAnimalsNameUseCase);

    const all = await listAllAnimalsAndOrderByAnimalsNameUseCase.execute();

    return response.json(all);  
  }
}

export { ListAllAnimalsAndOrderByAnimalsNameController };
