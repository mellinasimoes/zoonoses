import {IOwnerRepository} from '../../repositories/IOwnerRepository';
import {Owner } from '../../entities/Owner';
import { injectable, inject } from 'tsyringe';


@injectable()
class ListOwnerUseCase{
  constructor (
    @inject("OwnerRepository") 
    private ownerRepository: IOwnerRepository){}

  async execute(): Promise <Owner[] |null> {
    const listAllOwner= await this.ownerRepository.list();
            
    return listAllOwner;
  }
}

export {ListOwnerUseCase}