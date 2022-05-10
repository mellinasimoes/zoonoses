import { injectable, inject } from "tsyringe";
import { AppError } from "../../../../database/errors/AppError";
import { IAnimalRepository } from "../../repositories/IAnimalRepository";
import { Animal } from "../../entities/Animal";

@injectable()
class FindAnimalByOwnerNameUseCase {
  constructor(
    @inject("OwnerRepository")
    private ownerRepository: IAnimalRepository,
  ) {}

  async execute({ name }): Promise<Animal[] | null> {
    const findAnimalByOwnerName = await this.ownerRepository.findAnimalByOwnerName(name);

    if (!findAnimalByOwnerName) {
      throw new AppError("Owner Name not found!");
    }

    return findAnimalByOwnerName;
  }
}

export { FindAnimalByOwnerNameUseCase };
