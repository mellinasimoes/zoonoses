import { IOwnerRepository, ICreateOwnerDTO } from "../../IOwnerRepository";
import { Owner } from "../../../entities/Owner";

class OwnerRepositoryInMemory implements IOwnerRepository {
  owner: Owner[] = [];

  async findByCPF(cpf: string): Promise<Owner> {
    return this.owner.find((owner) => owner.cpf === cpf);
  }

  async findOwnerById(id: string): Promise<Owner> {
    return this.owner.find((owner) => owner.id === id);
  }

  async findOwnerByName(name: string): Promise<Owner[] | undefined> {
    return this.owner.filter((owner) => owner.name === name);
  }

  async list(): Promise<Owner[] | undefined> {
    return this.owner;
  }
  async create({ name, cpf, rg, birth_date, address, city, phone_number }: ICreateOwnerDTO): Promise<Owner> {
    const owner = new Owner();

    Object.assign(owner, {
      name,
      cpf,
      rg,
      birth_date,
      address,
      city,
      phone_number,
    });

    this.owner.push(owner);

    return owner;
  }
}

export { OwnerRepositoryInMemory };
