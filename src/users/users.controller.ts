import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import {CreateUserDto} from './dto/create-user.dto'

@Controller('users')
export class UsersController {
constructor(private readonly usersService:UsersService){}
// @Post("/all")
// findAll()
// {
//     return this.usersService.findAll();
// }
@Post("create")
create(@Body() createUserDto:CreateUserDto )
{
    return this.usersService.create(createUserDto);
}

}
