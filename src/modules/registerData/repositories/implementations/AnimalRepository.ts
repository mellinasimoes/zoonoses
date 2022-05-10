import {Animal} from "../../entities/Animal";
import {IAnimalRepository, IcreateAnimalDTO } from "../IAnimalRepository";
import {Repository, getRepository, MoreThan, LessThan, Between} from "typeorm"

class AnimalRepository implements IAnimalRepository {
  private repository: Repository<Animal>;

  constructor (){
    this.repository=getRepository(Animal);

  }

  async create({ 
    owner_id,
    owner_name,
    animal_name,
    gender,
    species,
    breed,
    birth_month,
    birth_year,
    neutering,
    notes,
  }: IcreateAnimalDTO): Promise<Animal> {
    const animal = this.repository.create({ 
    owner_id,
    owner_name,
    animal_name,
    gender,
    species,
    breed,
    birth_month,
    birth_year,
    neutering,
    notes,
    })

  await this.repository.save(animal);

  return animal;
  }

  async listAllAnimalByName(): Promise<Animal[]> {
    const animal= await this.repository.find({relations: ['owner'],
      order:{
        animal_name:"ASC",
      }
    });
    return animal;
  }

  async findAnimalByOwnerId(owner_id: string): Promise<Animal[] | undefined> {
    const animal = await this.repository.findOne({relations: ['owner'], 
    where: {owner_id:owner_id}
  });
    
    return animal;
  }

 
  async listAnimalsBetweenBirthYear(initial_year:string,final_year:string): Promise<Animal[] | undefined>{
    const animal = await this.repository.find({relations: ['owner'],
    where: {birth_year: Between(initial_year, final_year)},
    order: {
      birth_year:"ASC",
    }
  }); 
  
  return animal;

  }

  async findAnimalByOwnerName(owner_name:string): Promise<Animal[] | undefined> {
    const animal = await this.repository.find({owner_name});
    
    return animal;
  }
}  
export {AnimalRepository};