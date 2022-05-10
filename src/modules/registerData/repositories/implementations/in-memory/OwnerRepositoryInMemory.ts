import {IOwnerRepository, ICreateOwnerDTO } from "../../IOwnerRepository";
import { Owner } from "../../../entities/Owner";

class OwnerRepositoryInMemory implements IOwnerRepository{
  owner: Owner[] = [];

  async findByCPF(cpf: string): Promise<Owner> {
    const owner = this.owner.find((owner) => owner.cpf === cpf);
    return owner;
  }

  async findOwnerById(id: string): Promise<Owner> {
    const owner = this.owner.find((owner) => owner.id === id);
    return owner;
  }

  async findOwnerByName(name: string): Promise<Owner[] | undefined> {
    return this.owner.filter((owner) => owner.name === name);
  }
  
    async list(): Promise<Owner[] | undefined> {
    const owner= this.owner;
    return owner;
  }
  async create({ 
    name,
    cpf,
    rg,
    birth_date,
    address,
    city,
    phone_number,
  }: ICreateOwnerDTO): Promise<Owner> {
    const owner = new Owner();

    Object.assign(owner,{
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
