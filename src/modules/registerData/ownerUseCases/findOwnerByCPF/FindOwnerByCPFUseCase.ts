import { IOwnerRepository } from "../../repositories/IOwnerRepository";
import { injectable, inject } from "tsyringe";
import { AppError } from "../../../../database/errors/AppError";
import { Owner } from "../../entities/Owner";

@injectable()
class FindOwnerByCPFUseCase {
  constructor(
    @inject("OwnerRepository")
    private ownerRepository: IOwnerRepository,
  ) {}

  async execute({ cpf }): Promise<Owner | null> {
    const findOwnerByCPF = await this.ownerRepository.findByCPF(cpf);

    if (!findOwnerByCPF) {
      throw new AppError("Owner not found!");
    }

    return findOwnerByCPF;
  }
}

export { FindOwnerByCPFUseCase };
