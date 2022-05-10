import { inject, injectable } from 'tsyringe';
import { Animal } from '../../entities/Animal';
import { IAnimalRepository } from '../../repositories/IAnimalRepository';

@injectable()
class ListAnimalsBetweenBirthYearUseCase{
  constructor (
    @inject("AnimalRepository")  
    private animalRepository: IAnimalRepository){}

  async execute({initial_year,final_year}): Promise <Animal[]|null> {
    const listAnimalsBetweenBirthYear = await this.animalRepository.listAnimalsBetweenBirthYear(initial_year, final_year)
    
    return listAnimalsBetweenBirthYear; 
  }
}

export { ListAnimalsBetweenBirthYearUseCase };
