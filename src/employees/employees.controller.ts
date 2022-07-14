import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesDTO } from './dto/employees.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  findAll() {
    return this.employeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.employeesService.findOne(id);
  }

  @Post()
  create(@Body() employeesDTO: EmployeesDTO) {
    return this.employeesService.create(employeesDTO);
  }

  @Put()
  update(@Param('id') id: number, @Body() employeesDTO: EmployeesDTO) {
    return this.employeesService.update(id, employeesDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.employeesService.delete(id);
  }
}
