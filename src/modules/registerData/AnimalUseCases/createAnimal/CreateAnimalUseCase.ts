import { IAnimalRepository } from "../../repositories/IAnimalRepository";
import { injectable, inject } from "tsyringe";
import { Animal } from "../../entities/Animal";

interface IRequest {
  id?: string;
  owner_id: string;
  animal_name: string;
  gender: string;
  species: string;
  breed: string;
  weight_in_kg: string;
  birth_day_of_month?: number;
  birth_month?: number;
  birth_year?: number;
  neutering: string;
  death_day_of_month?: number;
  death_month?: number;
  death_year?: number;
  notes?: string;
}
@injectable()
class CreateAnimalUseCase {
  constructor(
    @inject("AnimalRepository")
    private animalRepository: IAnimalRepository,
  ) {}

  async execute({
    owner_id,
    animal_name,
    gender,
    species,
    breed,
    weight_in_kg,
    birth_day_of_month,
    birth_month,
    birth_year,
    death_day_of_month,
    death_month,
    death_year,
    neutering,
    notes,
  }: IRequest): Promise<Animal | undefined> {
    return await this.animalRepository.create({
      owner_id,
      animal_name,
      gender,
      species,
      breed,
      weight_in_kg,
      birth_day_of_month,
      birth_month,
      birth_year,
      death_day_of_month,
      death_month,
      death_year,
      neutering,
      notes,
    });
  }
}
export { CreateAnimalUseCase };
