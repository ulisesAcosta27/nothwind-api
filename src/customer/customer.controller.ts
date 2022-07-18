import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDTO } from './dto/customer.dto';

@Controller('customer')
export class customerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.customerService.findOne(id);
  }

  @Post()
  create(@Body() customerDTO: CustomerDTO) {
    return this.customerService.create(customerDTO);
  }

  @Put()
  update(@Param('id') id: number, @Body() customerDTO: CustomerDTO) {
    return this.customerService.update(id, customerDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.customerService.delete(id);
  }
}
