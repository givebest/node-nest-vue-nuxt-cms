import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('home')
export class Home {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  pic: string;

  @Column('mediumtext', { nullable: true })
  intro: string;

  @Column()
  status: boolean;

  @Column({
    select: false,
  })
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
