import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('banner')
export class Banner {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

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
