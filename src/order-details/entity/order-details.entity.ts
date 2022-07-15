import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderDetails {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  UnitPrice: string;
  @Column()
  Quantity: string;
  @Column()
  Discount: string;
}
