import { IAnimalRepository, IcreateAnimalDTO } from "../../IAnimalRepository";
import { Animal } from "src/modules/registerData/entities/Animal";

class AnimalRepositoryInMemory implements IAnimalRepository {
  animals: Animal[] = [];

  async findAnimalByOwnerName(name: string): Promise<Animal[] | undefined> {
    return this.animals.filter((animal) => animal.name === name);
  }

  async listAnimalsBetweenBirthYear(initial_year: string, final_year: string): Promise<Animal[] | null> {
    return this.animals;
  }

  async findAnimalByOwnerId(owner_id: string): Promise<Animal[] | undefined> {
    return this.animals.filter((animal) => animal.owner_id === owner_id);
  }

  async listAllAnimalByName(): Promise<Animal[] | null> {
    return this.animals;
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

export { AnimalRepositoryInMemory };
