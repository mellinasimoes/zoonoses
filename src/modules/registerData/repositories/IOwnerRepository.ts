import { Owner } from "../entities/Owner";

interface ICreateOwnerDTO{
  name:string;
  cpf:string;
  rg:string;
  birth_date?: Date | undefined;
  address?: string | undefined;
  city?: string | undefined;
  phone_number?: string | undefined;
}

interface IOwnerRepository{
  findByCPF(cpf: string): Promise<Owner | undefined>;
  findOwnerById(id: string): Promise<Owner| undefined>;
  findOwnerByName (name:string): Promise<Owner[] | undefined>;
  list (): Promise<Owner[]|null>;
  create ({
    name,
    cpf,
    rg,
    birth_date,
    address,
    city,
    phone_number,
  }: ICreateOwnerDTO): Promise<Owner>;
}
export {IOwnerRepository, ICreateOwnerDTO};