import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("owners")
class Owner {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string | undefined;
  
  @Column()
  cpf: string | undefined;

  @Column()
  rg: string | undefined;

  @Column()
  birth_date: Date | undefined;

  @Column()
  address: string | undefined;

  @Column()
  city: string | undefined;

  @Column()
  phone_number: string | undefined;

  @CreateDateColumn()
  created_at: Date | undefined;

  constructor(id?: string) {
    if (!this.id) {
      this.id = uuidV4();    
    } else {
      this.id = id;
    }
  }
}

export { Owner };