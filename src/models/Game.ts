import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  launcher!: string;

  @Column()
  name!: string;

  @Column()
  executable_path!: string;

  @Column()
  card_img_path?: string;

  @Column()
  logo_img_path?: string;

  @Column()
  hero_img_path?: string;

  @UpdateDateColumn()
  updated_at!: Date;
}
