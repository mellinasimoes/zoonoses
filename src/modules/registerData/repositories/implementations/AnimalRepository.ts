import { Animal } from "../../entities/Animal";
import { IAnimalRepository, IcreateAnimalDTO } from "../IAnimalRepository";
import { Repository, getRepository, Between } from "typeorm";
import { validate } from "class-validator";
import { AppError } from "../../../../database/errors/AppError";

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
    weight_in_kg,
    birth_day_of_month,
    birth_month,
    birth_year,
    death_day_of_month,
    death_month,
    death_year,
    neutering,
    notes,
  }: IcreateAnimalDTO): Promise<Animal> {
    try {
      const createAnimal = this.repository.create({
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

      const errors = await validate(createAnimal);

      if (errors.length === 0) {
        await this.repository.save(createAnimal);
        return createAnimal;
      }
      throw new AppError(errors.map((v) => v.constraints));
    } catch (err) {
      return err.message;
    }
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
    return await this.repository.find({ relations: ["owner"], where: { owner_id: owner_id } });
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
}
export { AnimalRepository };
