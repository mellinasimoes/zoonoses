import { Animal } from "../entities/Animal";

interface IcreateAnimalDTO {
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

interface IAnimalRepository {
  listAnimalsBetweenBirthYear(initial_year: string, final_year: string): Promise<Animal[] | null>;
  findAnimalByOwnerId(owner_id: string): Promise<Animal[] | undefined>;
  listAllAnimalByName(): Promise<Animal[] | null>;
  create({
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
  }: IcreateAnimalDTO): Promise<Animal | undefined>;
}
export { IAnimalRepository, IcreateAnimalDTO };
