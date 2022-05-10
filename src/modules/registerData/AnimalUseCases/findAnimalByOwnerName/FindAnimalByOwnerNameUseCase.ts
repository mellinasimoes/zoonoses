import { injectable, inject } from 'tsyringe';
import { AppError } from '../../../../database/errors/AppError';
import { IAnimalRepository } from '../../repositories/IAnimalRepository';
import { Animal } from '../../entities/Animal';

@injectable()
class FindAnimalByOwnerNameUseCase{
  constructor (
    @inject("AnimalRepository")
    private animalRepository: IAnimalRepository
    ){}

  async execute({owner_name}): Promise <Animal[]|null> {
    const findAnimalByOwnerName = await this.animalRepository.findAnimalByOwnerName(owner_name);

    if (!findAnimalByOwnerName){
      throw new AppError ("Owner Name not found!")
    }

    return findAnimalByOwnerName;      
    
  }
}

export {FindAnimalByOwnerNameUseCase }