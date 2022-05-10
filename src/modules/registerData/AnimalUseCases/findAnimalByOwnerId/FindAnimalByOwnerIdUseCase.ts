import { injectable, inject } from "tsyringe";
import { AppError } from "../../../../database/errors/AppError";
import { IAnimalRepository } from "../../repositories/IAnimalRepository";
import { Animal } from "../../entities/Animal";

@injectable()
class FindAnimalByOwnerIdUseCase {
  constructor(
    @inject("AnimalRepository")
    private animalRepository: IAnimalRepository,
  ) {}

  async execute({ owner_id }): Promise<Animal[] | null> {
    const findAnimalByOwnerId = await this.animalRepository.findAnimalByOwnerId(owner_id);

    if (!findAnimalByOwnerId) {
      throw new AppError("Owner Id not found!");
    }

    return findAnimalByOwnerId;
  }
}

export { FindAnimalByOwnerIdUseCase };
