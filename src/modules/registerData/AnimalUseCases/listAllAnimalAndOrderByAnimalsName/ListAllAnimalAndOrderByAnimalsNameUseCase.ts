import { inject, injectable } from "tsyringe";
import { Animal } from "../../entities/Animal";
import { IAnimalRepository } from "../../repositories/IAnimalRepository";

@injectable()
class ListAllAnimalAndOrderByAnimalsNameUseCase {
  constructor(
    @inject("AnimalRepository")
    private animalRepository: IAnimalRepository,
  ) {}

  async execute(): Promise<Animal[] | null> {
    return await this.animalRepository.listAllAnimalByName();
  }
}

export { ListAllAnimalAndOrderByAnimalsNameUseCase };
