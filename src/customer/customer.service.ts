import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { customer } from './entity/customer.entity';
import { CustomerDTO } from './dto/customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(customer)
    private readonly custormerRepository: Repository<customer>,
  ) {}

  async findAll() {
    return await this.custormerRepository.find();
  }

  async findOne(id: number) {
    return this.custormerRepository.findOne({ where: { id } });
  }

  async create(customerDTO: CustomerDTO) {
    const createNewCustomer = this.custormerRepository.create(customerDTO);
    return this.custormerRepository.save(createNewCustomer);
  }

  async update(id: number, customerDTO: CustomerDTO) {
    return this.custormerRepository.update(id, customerDTO);
  }

  async delete(id: number) {
    return this.custormerRepository.delete(id);
  }
}
