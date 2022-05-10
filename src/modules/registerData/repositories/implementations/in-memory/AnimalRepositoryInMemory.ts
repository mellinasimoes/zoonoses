import { IAnimalRepository, IcreateAnimalDTO } from "../../IAnimalRepository";
import { Animal } from "src/modules/registerData/entities/Animal";



class AnimalRepositoryInMemory implements IAnimalRepository{

  animals:Animal[]=[];

  async findAnimalByOwnerName(name: string): Promise<Animal[] | undefined> {
    const animal = this.animals.filter((animal) => animal.name === name);
    return animal;
  }

  async listAnimalsBetweenBirthYear(initial_year: string, final_year: string): Promise<Animal[] | null> {
    const animal = this.animals;
    return animal;
  }

  async findAnimalByOwnerId(owner_id: string): Promise<Animal[]| undefined> {
    const animal = this.animals.filter((animal) => animal.owner_id === owner_id);
    return animal;
  }

  async listAllAnimalByName(): Promise<Animal[] | null> {
    const animal = this.animals;
    return animal;
}

  create({ 
    owner_id,
    animal_name,
    gender,
    species,
    breed,
    birth_month,
    birth_year,
    neutering,
    notes,
  }: IcreateAnimalDTO): Promise<Animal> {
    const animal = new Animal();

    Object.assign(animal, {
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

    this.animals.push(animal);

    return animal;
  }
}  

export { AnimalRepositoryInMemory }


  