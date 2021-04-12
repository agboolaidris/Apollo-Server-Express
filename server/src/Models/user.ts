import { Column, Entity, OneToMany } from "typeorm";
import { Post } from ".";
import Common from "./common";

@Entity("users")
export default class User extends Common {
  @Column({ type: "varchar" })
  "username": string;

  @Column({ type: "varchar" })
  "email": string;

  @Column({ type: "varchar" })
  "password": string;

  @Column({ nullable: true, type: "varchar" })
  "avater": string;

  @OneToMany(() => Post, (post) => post.user)
  "posts": Post[];
}
