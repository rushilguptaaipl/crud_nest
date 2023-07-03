import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import {CreateUserDto} from './dto/create-user.dto'

@Controller('users')
export class UsersController {
constructor(private readonly usersService:UsersService){}
@Get("all")
findAll()
{
    return this.usersService.findAll();
}
@Post("create")
create(@Body() createUserDto:CreateUserDto )
{
    return this.usersService.create(createUserDto);
}
@Get(':id')
findone(@Param('id') id:string){
    return this.usersService.findone(+id)
}
}
