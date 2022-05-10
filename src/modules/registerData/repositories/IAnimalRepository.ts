import {Animal} from "../entities/Animal"

interface IcreateAnimalDTO{
  id?:string;
  owner_id:string;
  animal_name: string;
  gender:string;
  species:string;
  breed:string;
  birth_month:string;
  birth_year:string;
  neutering: string;
  notes?: string;
}

interface IAnimalRepository {
  findAnimalByOwnerName(name: string): Promise<Animal[] |undefined>;
  listAnimalsBetweenBirthYear (initial_year:string,final_year:string): Promise<Animal[]|null>; 
  findAnimalByOwnerId (owner_id:string): Promise<Animal[] | undefined>; 
  listAllAnimalByName (): Promise<Animal[]|null>;
  create ({
    owner_id,
    animal_name,
    gender,
    species,
    breed,
    birth_month,
    birth_year,
    neutering,
    notes,
  }: IcreateAnimalDTO):Promise<Animal| undefined>;
}
export { IAnimalRepository, IcreateAnimalDTO };