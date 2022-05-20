import { IOwnerRepository } from "../../repositories/IOwnerRepository";
import { injectable, inject } from "tsyringe";
import { Owner } from "../../entities/Owner";

@injectable()
class ListAllOwnerByNameUseCase {
  constructor(
    @inject("OwnerRepository")
    private ownerRepository: IOwnerRepository,
  ) {}

  async execute(): Promise<Owner[] | null> {
    return await this.ownerRepository.listAllOwnerByName();
  }
}

export { ListAllOwnerByNameUseCase };
