import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
