import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly repo: Repository<Users>,
  ) {}

  async create(createUserDto) : Promise <Users[]|null>{
    const user = await this.repo.create(createUserDto);
    return this.repo.save(user);
  }

  findAll() : Promise <Users[]|null> {
    return this.repo.find();
  }

  findone(id): Promise <Users|null>
  {
    return this.repo.findOneBy(id)
  }
}
