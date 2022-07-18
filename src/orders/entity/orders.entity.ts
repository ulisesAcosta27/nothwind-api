import { customer } from 'src/customer/entity/customer.entity';
import { Employees } from 'src/employees/entity/employees.entity';
import { OrderDetails } from 'src/order-details/entity/order-details.entity';
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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
  @ManyToOne(() => customer, (customer) => customer.Orders)
  customer: customer[];
  @ManyToOne(() => Employees, (employee) => employee.Orders)
  employee: Employees[];
  @OneToOne(()=> OrderDetails)

}
