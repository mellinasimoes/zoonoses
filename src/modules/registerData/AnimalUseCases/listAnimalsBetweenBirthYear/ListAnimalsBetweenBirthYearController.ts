import { Request, Response } from 'express';
import { container } from "tsyringe";
import { ListAnimalsBetweenBirthYearUseCase } from './ListAnimalsBetweenBirthYearUseCase';

class ListAnimalsBetweenBirthYearController{

  async handle(request:Request,response:Response): Promise<Response>{
    const {initial_year, final_year}=request.body
 
    const listAnimalsBetweenBirthYearUseCase = container.resolve(ListAnimalsBetweenBirthYearUseCase);

    const all = await listAnimalsBetweenBirthYearUseCase .execute({initial_year, final_year});

    return response.json(all);  
  }
}

export { ListAnimalsBetweenBirthYearController };
