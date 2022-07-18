import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { customerController } from './customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { customer } from './entity/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([customer])],
  providers: [CustomerService],
  controllers: [customerController],
  exports: [CustomerService],
})
export class CustomerModule {}
