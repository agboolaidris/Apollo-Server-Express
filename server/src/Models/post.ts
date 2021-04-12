import { BaseEntity, Column, Entity, ManyToOne } from "typeorm";
import { User } from ".";
import Common from "./common";

@Entity("posts")
export default class Posts extends Common {
  @Column({ type: "varchar" })
  "title": string;

  @Column({ type: "varchar" })
  "content": string;

  @Column({ type: "varchar", nullable: true })
  "featureImg": string;

  @ManyToOne(() => User, (user) => user.posts)
  "user": User;
}
