import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employees } from './entity/employees.entity';
import { EmployeesDTO } from './dto/employees.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employees)
    private readonly employeesRepository: Repository<Employees>,
  ) {}

  async findAll() {
    return await this.employeesRepository.find();
  }

  async findOne(id: number) {
    return this.employeesRepository.findOne({ where: { id } });
  }

  async create(employeesDTO: EmployeesDTO) {
    const createNewEmployee = this.employeesRepository.create(employeesDTO);
    return this.employeesRepository.save(createNewEmployee);
  }

  async update(id: number, employeesDTO: EmployeesDTO) {
    return this.employeesRepository.update(id, employeesDTO);
  }

  async delete(id: number) {
    return this.employeesRepository.delete(id);
  }
}
