import { BaseEntity, Column, Entity } from "typeorm";
import Common from "./common";

@Entity()
export default class Posts extends Common {
  @Column({ type: "varchar" })
  "title": string;

  @Column({ type: "varchar" })
  "content": string;

  @Column({ type: "varchar", nullable: true })
  "featureImg": string;
}
