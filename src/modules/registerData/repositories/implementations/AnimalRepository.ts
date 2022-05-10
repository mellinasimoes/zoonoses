import { Animal } from "../../entities/Animal";
import { IAnimalRepository, IcreateAnimalDTO } from "../IAnimalRepository";
import { Repository, getRepository, MoreThan, LessThan, Between } from "typeorm";

class AnimalRepository implements IAnimalRepository {
  private repository: Repository<Animal>;

  constructor() {
    this.repository = getRepository(Animal);
  }

  async create({
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
    const animal = this.repository.create({
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

    await this.repository.save(animal);

    return animal;
  }

  async listAllAnimalByName(): Promise<Animal[]> {
    return await this.repository.find({
      relations: ["owner"],
      order: {
        animal_name: "ASC",
      },
    });
  }

  async findAnimalByOwnerId(owner_id: string): Promise<Animal[] | undefined> {
    return await this.repository.findOne({ relations: ["owner"], where: { owner_id: owner_id } });
  }

  async listAnimalsBetweenBirthYear(initial_year: string, final_year: string): Promise<Animal[] | undefined> {
    return await this.repository.find({
      relations: ["owner"],
      where: { birth_year: Between(initial_year, final_year) },
      order: {
        birth_year: "ASC",
      },
    });
  }

  async findAnimalByOwnerName(name: string): Promise<Animal[] | undefined> {
    return await this.repository.find({ name });
  }
}
export { AnimalRepository };
