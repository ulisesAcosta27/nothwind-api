import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { ShippersModule } from './shippers/shippers.module';
import { OrderDetailsModule } from './order-details/order-details.module';

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
    OrderDetailsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
