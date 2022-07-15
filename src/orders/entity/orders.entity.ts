import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  CategoryName: string;
  @Column()
  Description: string;
  @Column()
  Picture: string;
}
