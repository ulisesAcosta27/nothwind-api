//import { Categories } from 'src/categories/entity/categories.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Suppliers {
  @PrimaryGeneratedColumn()
  id: number;
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
  @Column()
  HomePage: string;
  @ManyToOne(() => product, (product) => product.suppliers)
  product: Product;
}
