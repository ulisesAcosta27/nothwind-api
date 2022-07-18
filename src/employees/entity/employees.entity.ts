import { Orders } from 'src/orders/entity/orders.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employees {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  FirstName: string;
  @Column()
  Title: string;
  @Column()
  TitleOfCourtesy: string;
  @Column()
  BirthDate: string;
  @Column()
  HireDate: Date;
  @Column()
  Address: string;
  @Column()
  City: string;
  @Column()
  Region: string;
  @Column()
  Country: string;
  @Column()
  PostalCode: string;
  @Column()
  HomePhone: string;
  @Column()
  Extension: string;
  @Column()
  Photo: string;
  @Column()
  ReportsTo: string;
  @Column()
  Notes: string;
  @Column()
  PhotoPath: string;
  @OneToMany(() => Orders, (Order) => Order.employees)
  Order: Orders[];
}
