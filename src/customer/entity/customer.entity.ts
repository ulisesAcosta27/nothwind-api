import { Orders } from 'src/orders/entity/orders.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class customer {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  CompanyName: string;
  @Column()
  ContactName: string;
  @Column()
  ContactTitle: string;
  @Column()
  Address: string;
  @Column()
  City: string;
  @Column()
  Region: string;
  @Column()
  PostalCode: string;
  @Column()
  Country: string;
  @Column()
  Phone: string;
  @Column()
  Fax: string;
  @OneToMany(() => Orders, (order) => order.customer)
  Orders: Orders[];
}
