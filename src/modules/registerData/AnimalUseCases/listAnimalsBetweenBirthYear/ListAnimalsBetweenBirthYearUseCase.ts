import { inject, injectable } from "tsyringe";
import { Animal } from "../../entities/Animal";
import { IAnimalRepository } from "../../repositories/IAnimalRepository";

@injectable()
class ListAnimalsBetweenBirthYearUseCase {
  constructor(
    @inject("AnimalRepository")
    private animalRepository: IAnimalRepository,
  ) {}

  async execute({ initial_year, final_year }): Promise<Animal[] | null> {
    return await this.animalRepository.listAnimalsBetweenBirthYear(initial_year, final_year);
  }
}

export { ListAnimalsBetweenBirthYearUseCase };
