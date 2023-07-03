import { IsAlphanumeric, IsString } from "class-validator";

export class CreateUserDto{
    @IsString()
    @IsAlphanumeric()
    name : string

    @IsString()
    age :  number
}