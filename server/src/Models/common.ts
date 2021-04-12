import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

export default class Common extends BaseEntity {
  @PrimaryGeneratedColumn()
  "id": number;

  @CreateDateColumn({ name: "created_at" }) "created_at": Date;

  @UpdateDateColumn({ name: "updated_at" }) "updated_at": Date;

  @Column({ name: "uuid", type: "varchar" })
  "uuid": string;

  @BeforeInsert()
  updateuuid() {
    this.uuid = uuid();
  }
}
