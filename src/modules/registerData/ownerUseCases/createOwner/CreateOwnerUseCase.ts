import { inject, injectable } from "tsyringe";
import { IOwnerRepository } from "../../repositories/IOwnerRepository";
import { AppError } from "../../../../database/errors/AppError";
import { Owner } from "../../entities/Owner";

interface IRequest {
  name: string;
  cpf: string;
  rg: string;
  birth_date?: Date;
  address?: string;
  city?: string;
  phone_number?: string;
}

@injectable()
class CreateOwnerUseCase {
  constructor(
    @inject("OwnerRepository")
    private ownerRepository: IOwnerRepository,
  ) {}

  async execute({ name, cpf, rg, birth_date, address, city, phone_number }: IRequest): Promise<Owner> {
    const cpfAlreadyExists = await this.ownerRepository.findByCPF(cpf);

    if (cpfAlreadyExists) {
      throw new AppError("CPF already exists!");
    }

    return await this.ownerRepository.create({
      name,
      cpf,
      rg,
      birth_date,
      address,
      city,
      phone_number,
    });
  }
}
export { CreateOwnerUseCase };
