import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  route: string;

  @Column()
  pic: string;

  @Column()
  category: string;

  @Column('mediumtext', { nullable: true })
  intro: string;

  @Column('mediumtext')
  content: string;

  @Column({
    default: false,
  })
  recommend: boolean;

  @Column()
  status: boolean;

  @Column({
    select: false,
  })
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
