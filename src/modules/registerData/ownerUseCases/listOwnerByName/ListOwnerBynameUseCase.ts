import { IOwnerRepository } from "../../repositories/IOwnerRepository";
import { injectable, inject } from "tsyringe";
import { AppError } from "../../../../database/errors/AppError";
import { Owner } from "../../entities/Owner";

@injectable()
class ListOwnerByNameUseCase {
  constructor(
    @inject("OwnerRepository")
    private ownerRepository: IOwnerRepository,
  ) {}

  async execute({ name }): Promise<Owner[] | null> {
    const listOwnerByname = await this.ownerRepository.findByName(name);

    if (!listOwnerByname) {
      throw new AppError("Owner not found!");
    }

    return listOwnerByname;
  }
}

export { ListOwnerByNameUseCase };
