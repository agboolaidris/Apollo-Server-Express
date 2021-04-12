import { Column, Entity } from "typeorm";
import Common from "./common";

@Entity()
export default class User extends Common {
  @Column({ type: "varchar" })
  "username": string;

  @Column({ type: "varchar" })
  "email": string;

  @Column({ type: "varchar" })
  "password": string;

  @Column({ nullable: true, type: "varchar" })
  "avater": string;
}
