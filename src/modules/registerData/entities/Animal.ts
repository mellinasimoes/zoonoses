import { Column, CreateDateColumn, Entity, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Owner } from "./Owner";
import { IsEnum, Max, Min, IsNotEmpty, IsString } from "class-validator";
import { Neutering } from "../../../domains/enuns/Neutering";
import { Gender } from "../../../domains/enuns/Gender";

@Entity("animals")
class Animal {
  @PrimaryColumn()
  id?: string;

  @Column()
  animal_name: string | undefined;

  @Column()
  @IsEnum(Gender)
  gender: string | undefined;

  @Column()
  species: string | undefined;

  @Column()
  breed: string | undefined;

  @Column()
  @IsString({ message: "Weigth in kg must be string!" })
  weight_in_kg: string | undefined;

  @Column()
  @Max(31, { message: "Birthday must be a number between 1 and 31" })
  @Min(1, { message: "Birthday must be a number between 1 and 31" })
  birth_day_of_month?: number | undefined;

  @Column()
  @Max(12, { message: "Birth month must be a number between 1 and 12" })
  @Min(1, { message: "Birth month must be a number between 1 and 12" })
  birth_month?: number | undefined;

  @Column()
  birth_year?: number | undefined;

  @Column()
  @IsEnum(Neutering)
  neutering: string | undefined;

  @Column()
  @Max(31, { message: "Death day must be a number between 1 and 31" })
  @Min(1, { message: "Death day must be a number between 1 and 31" })
  death_day_of_month?: number | undefined;

  @Column()
  @Max(12, { message: "Death month must be a number between 1 and 12" })
  @Min(1, { message: "Death month must be a number between 1 and 12" })
  death_month?: number | undefined;

  @Column()
  death_year?: number | undefined;

  @Column()
  notes?: string | undefined;

  @ManyToOne(() => Owner)
  @JoinColumn({ name: "owner_id" })
  owner: Owner;

  @Column()
  @IsNotEmpty({ message: "Owner id must not be empty!" })
  owner_id: string | undefined;

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
