import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shippers {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  CompanyName: string;
  @Column()
  Phone: string;
}
