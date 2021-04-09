import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
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

  @CreateDateColumn({ name: "created_at" }) "created_at": Date;
  @UpdateDateColumn({ name: "updated_at" }) "updated_at": Date;
}
