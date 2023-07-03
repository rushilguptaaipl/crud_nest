import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entity/users.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private readonly repo:Repository<Users>){}

    
  create(createUserDto){
    const user = this.repo.create(createUserDto) 
    return this.repo.save(user);
  }
    
}
