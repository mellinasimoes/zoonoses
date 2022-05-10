import { Entity, PrimaryColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { v4 as uuidV4 } from "uuid";

@Entity("users_tokens")
class UserTokens {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { UserTokens };
