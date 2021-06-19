import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  getAll(): string {
    return 'All users are returned';
  }

  @Post()
  add(@Body() body: CreateUserDto): string {
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
