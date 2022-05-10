import {Owner} from "../../entities/Owner";
import {IOwnerRepository, ICreateOwnerDTO} from "../IOwnerRepository"
import {Repository, getRepository} from "typeorm";

class OwnerRepository implements IOwnerRepository {
  private repository:Repository<Owner>;

  constructor (){
    this.repository= getRepository(Owner);
  }
 
  async create ({
    name,
    cpf,
    rg,
    birth_date,
    address,
    city,
    phone_number,
  }:ICreateOwnerDTO): Promise<Owner> {
    const owner= this.repository.create({
    name,
    cpf,
    rg,
    birth_date,
    address,
    city,
    phone_number,
    });

    const ownerCreated= await this.repository.save(owner);
    
    return ownerCreated;
  }

  async list(): Promise<Owner[]> {
    const owner= await this.repository.find({
      order:{
        name:"ASC",
      }
    });
    return owner;
  }

  async findOwnerByName(name:string):Promise<Owner[] | undefined>{
    const owner = await this.repository.find({name});
    return owner;
  }
  
  async findOwnerById(id: string): Promise<Owner> {
    const owner = await this.repository.findOne({id});
    return owner
  }

  async findByCPF(cpf: string): Promise<Owner> {
    const owner = await this.repository.findOne({cpf});
    return owner
  }  
}
export {OwnerRepository};