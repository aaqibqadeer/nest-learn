import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  private readonly Users: User[] = [];

  getAll(): User[] {
    return this.Users;
  }

  add(user: User): void {
    this.Users.push(user);
  }
}
