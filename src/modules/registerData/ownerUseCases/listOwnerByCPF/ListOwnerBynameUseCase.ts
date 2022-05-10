import { IOwnerRepository } from "../../repositories/IOwnerRepository";
import { injectable, inject } from "tsyringe";
import { AppError } from "../../../../database/errors/AppError";
import { Owner } from "../../entities/Owner";

@injectable()
class ListOwnerByCPFUseCase {
  constructor(
    @inject("OwnerRepository")
    private ownerRepository: IOwnerRepository,
  ) {}

  async execute({ cpf }): Promise<Owner | null> {
    const listOwnerByCPF = await this.ownerRepository.findByCPF(cpf);

    if (!listOwnerByCPF) {
      throw new AppError("Owner not found!");
    }

    return listOwnerByCPF;
  }
}

export { ListOwnerByCPFUseCase };
