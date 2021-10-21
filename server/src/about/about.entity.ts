import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('about')
export class About {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  route: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column()
  banner: string;

  @Column('mediumtext', { nullable: true })
  content: string;

  @Column()
  status: boolean;

  @Column({
    select: false,
  })
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
