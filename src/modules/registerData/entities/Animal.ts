import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  OneToOne,
  JoinTable,
  JoinColumn,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Owner } from "./Owner";

@Entity("animals")
class Animal {
  @PrimaryColumn()
  id?: string;

  @Column()
  animal_name: string | undefined;

  @Column()
  gender: string | undefined;

  @Column()
  species: string | undefined;

  @Column()
  breed: string | undefined;

  @Column()
  birth_month: number | undefined;

  @Column()
  birth_year: number | undefined;

  @Column()
  neutering: string | undefined;

  @Column()
  notes?: string | undefined;

  @ManyToOne(() => Owner)
  @JoinColumn({ name: "owner_id" })
  owner: Owner;

  @Column()
  owner_id: string;

  @CreateDateColumn()
  created_at: Date | undefined;

  constructor(id: string) {
    if (!this.id) {
      this.id = uuidv4();
    } else {
      this.id = id;
    }
  }
}

export { Animal };
