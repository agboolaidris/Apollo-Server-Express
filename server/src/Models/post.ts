import { v4 as uuid } from "uuid";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BeforeInsert,
} from "typeorm";

@Entity()
export default class Posts extends BaseEntity {
  @PrimaryGeneratedColumn()
  "id": number;

  @Column({ type: "varchar" })
  "title": string;

  @Column({ type: "varchar" })
  "content": string;

  @Column({ type: "varchar", nullable: true })
  "featureImg": string;

  @Column({ type: "varchar", name: "uuid" })
  "uuid": string;

  @BeforeInsert()
  updateUuid() {
    this.uuid = uuid();
  }

  @CreateDateColumn({ name: "created_at" }) "created_at": Date;
  @UpdateDateColumn({ name: "updated_at" }) "updated_at": Date;
}
