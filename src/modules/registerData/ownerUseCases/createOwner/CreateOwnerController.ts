import {Request,Response} from 'express'
import {container} from "tsyringe"
import { CreateOwnerUseCase } from './CreateOwnerUseCase';

class CreateOwnerController{

   
  async handle(request:Request,response:Response): Promise<Response>{
    const {
      name,
      cpf,
      rg,
      birth_date,
      address,
      city,
      phone_number,
    }=request.body;

    const createOwnerUseCase= container.resolve(CreateOwnerUseCase);
   
    const ownerCreated= await createOwnerUseCase.execute({
      name,
      cpf,
      rg,
      birth_date,
      address,
      city,    
      phone_number,});

    return response.status(201).json(ownerCreated);
  }  
}

export {CreateOwnerController}