import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

import { User, UserWithId } from './user.interface';
import { UserRepository } from './user.repository';
import { USERS_ROUTE, USERS_BY_ID_ROUTE } from './user.routes';

@Controller()
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Get(USERS_ROUTE)
  async getUsers(): Promise<UserWithId[]> {
    return await this.userRepository.get();
  }

  @Get(USERS_BY_ID_ROUTE)
  async getUserById(@Param('id') id: string): Promise<UserWithId> {
    return await this.userRepository.getById(id);
  }

  @Post(USERS_ROUTE)
  async createUser(@Body() userData: User): Promise<UserWithId> {
    return await this.userRepository.create(userData);
  }

  @Put(USERS_BY_ID_ROUTE)
  async updateUser(
    @Param('id') id: string,
    @Body() userData: User,
  ): Promise<boolean> {
    return await this.userRepository.update(id, userData);
  }

  @Delete(USERS_BY_ID_ROUTE)
  async deleteUser(@Param('id') id: string): Promise<boolean> {
    return await this.userRepository.delete(id);
  }
}
