import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  CategoryName: string;
  @Column()
  Description: string;
  @Column()
  Picture: string;
}
