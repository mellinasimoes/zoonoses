import { Owner } from "../../entities/Owner";
import { IOwnerRepository, ICreateOwnerDTO } from "../IOwnerRepository";
import { Repository, getRepository } from "typeorm";

class OwnerRepository implements IOwnerRepository {
  private repository: Repository<Owner>;

  constructor() {
    this.repository = getRepository(Owner);
  }
  async create({ name, cpf, rg, birth_date, address, city, phone_number }: ICreateOwnerDTO): Promise<Owner> {
    const owner = this.repository.create({
      name,
      cpf,
      rg,
      birth_date,
      address,
      city,
      phone_number,
    });

    return await this.repository.save(owner);
  }

  async listAllOwnerByName(): Promise<Owner[]> {
    return await this.repository.find({
      order: {
        name: "ASC",
      },
    });
  }

  async findOwnerByName(name: string): Promise<Owner[] | undefined> {
    return await this.repository.find({ name });
  }

  async findOwnerById(id: string): Promise<Owner> {
    return await this.repository.findOne({ id });
  }

  async findByCPF(cpf: string): Promise<Owner> {
    return await this.repository.findOne({ cpf });
  }
}
export { OwnerRepository };
