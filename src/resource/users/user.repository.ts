import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v1 as uuid } from 'uuid';

import { UserWithId, User } from './user.interface';
import { DBRepository } from '../common/common.interfaces';

@Injectable()
export class UserRepository implements DBRepository<User, UserWithId> {
  constructor(@InjectModel('User') private userModel: Model<UserWithId>) {}

  async get(): Promise<UserWithId[]> {
    return await this.userModel.find({});
  }

  async getById(id: string): Promise<UserWithId> {
    return await this.userModel.findById(id);
  }

  async create(userData: User): Promise<UserWithId> {
    return await this.userModel.create({
      ...userData,
      _id: uuid(),
    });
  }

  async update(id: string, data: User): Promise<boolean> {
    return !!(await this.userModel.updateOne({ _id: id }, data)).ok;
  }

  async delete(id: string): Promise<boolean> {
    return !!(await this.userModel.deleteOne({ _id: id })).deletedCount;
  }
}
