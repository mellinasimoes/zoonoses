import { IOwnerRepository } from "../../repositories/IOwnerRepository";
import { Owner } from "../../entities/Owner";
import { injectable, inject } from "tsyringe";
import { AppError } from "../../../../database/errors/AppError";

@injectable()
class FindOwnerByNameUseCase {
  constructor(
    @inject("OwnerRepository")
    private ownerRepository: IOwnerRepository,
  ) {}

  async execute({ name }): Promise<Owner[] | null> {
    const findOwnerByName = await this.ownerRepository.findOwnerByName(name);

    if (findOwnerByName.length === 0) {
      throw new AppError("Owner name not found!");
    }
    console.log(findOwnerByName);
    return findOwnerByName;
  }
}

export { FindOwnerByNameUseCase };
