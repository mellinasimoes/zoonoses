import {IAnimalRepository} from "../../repositories/IAnimalRepository"
import { injectable, inject } from "tsyringe";
import { Animal } from "../../entities/Animal";

interface IRequest {
  id?:string;
  animal_name: string;
  gender:string;
  owner_id:string;
  species:string;
  breed:string;
  birth_month:string;
  birth_year:string;
  neutering: string;
  notes?: string;
}
@injectable()
class CreateAnimalUseCase{
  constructor (
    @inject("AnimalRepository")
    private animalRepository: IAnimalRepository) {}
  
  async execute ({
    owner_id,
    animal_name,
    gender,
    species,
    breed,
    birth_month,
    birth_year,
    neutering,
    notes,
  }: IRequest): Promise<Animal| undefined> {    

    const animal =  await this.animalRepository.create({
      owner_id,
      animal_name,
      gender,
      species,
      breed,
      birth_month,
      birth_year,
      neutering,
      notes,
    });

      return animal;
    }
}
export {CreateAnimalUseCase}