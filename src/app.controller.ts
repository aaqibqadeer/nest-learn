import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';

@Controller('users')
export class AppController {
  constructor(private userService: UsersService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  getAll(): User[] {
    return this.userService.getAll();
  }

  @Post()
  add(@Body() body: CreateUserDto): string {
    const newUser = { name: body.name };
    this.userService.add(newUser);
    return `User ${body.name} is added`;
  }

  @Put(':id')
  update(@Body() body: CreateUserDto, @Param('id') id: string): string {
    return `User with id ${id} and name ${body.name} is added`;
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `User with id ${id} is deleted`;
  }
}
