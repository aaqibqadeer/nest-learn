import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly Users: User[] = [];

  getAll(): User[] {
    return this.Users;
  }

  add(user: User): void {
    this.Users.push(user);
  }

  // update(): string {
  //   return `User with id ${id} and name ${body.name} is added`;
  // }

  // remove(): string {
  //   return `User with id ${id} is deleted`;
  // }
}
