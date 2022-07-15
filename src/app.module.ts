import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { ShippersModule } from './shippers/shippers.module';
<<<<<<< HEAD
import { CustomerModule } from './customer/customer.module';
=======
import { OrderDetailsModule } from './order-details/order-details.module';
>>>>>>> 7b2d810413a3e1504a1cef6b0d6d846e6e2fef0c

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
    EmployeesModule,
    SuppliersModule,
    CategoriesModule,
    OrdersModule,
    ShippersModule,
<<<<<<< HEAD
    CustomerModule,
=======
    OrderDetailsModule,
>>>>>>> 7b2d810413a3e1504a1cef6b0d6d846e6e2fef0c
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
