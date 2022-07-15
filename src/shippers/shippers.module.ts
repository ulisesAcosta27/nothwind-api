import { Module } from '@nestjs/common';
import { ShippersController } from './shippers.controller';
import { ShippersService } from './shippers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shippers } from './entity/shippers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shippers])],
  controllers: [ShippersController],
  providers: [ShippersService],
  exports: [ShippersService],
})
export class ShippersModule {}
