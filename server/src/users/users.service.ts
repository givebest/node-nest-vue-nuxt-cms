import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, Raw, In } from 'typeorm';
import { cryptoString } from '../libs/lib';
import * as generator from 'generate-password';
import { RemoveUserDto } from './dto/remove-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  // 增加
  async create(createUserDto: CreateUserDto): Promise<any> {
    const { name, password, createdAt } = createUserDto;
    createUserDto.password = cryptoString(password);
    createUserDto.createdAt = createdAt || new Date();
    createUserDto.updatedAt = new Date();

    delete createUserDto.id;

    const isExist = await this.usersRepository.count({
      where: {
        name,
      },
    });
    if (isExist > 0) {
      return {
        statusCode: 202,
        message: '已存在',
      };
    }

    return await this.usersRepository.save(createUserDto);
  }

  // 删除
  async delete(removeUserDto: RemoveUserDto): Promise<any> {
    const { ids } = removeUserDto;

    return this.usersRepository.delete(ids);
  }

  // 更新
  async update(updateUserData): Promise<any> {
    const { id, updateUserDto } = updateUserData;
    updateUserDto.updatedAt = new Date();
    const { name } = updateUserDto;

    const isExist = await this.usersRepository.count({
      where: {
        name,
      },
    });
    if (isExist > 1) {
      return {
        statusCode: 201,
        message: '已存在',
      };
    }

    return await this.usersRepository.update(id, updateUserDto);
  }

  // 列表
  async findAll(query: any): Promise<any> {
    const { keyword, page = 1, limit = 10 } = query;
    const skip = (page - 1) * limit;

    let params = {
      skip,
      take: limit,
    };

    let whereParams = {};

    if (keyword) {
      whereParams = Object.assign(whereParams, {
        name: Like(`%${keyword}%`),
      });
    }

    params = Object.assign(
      {
        select: ['id', 'name', 'updatedAt', 'status'],
      },
      params,
      {
        where: whereParams,
      },
      {
        order: {
          updatedAt: 'DESC',
        },
      },
    );

    const [data, total] = await this.usersRepository.findAndCount(params);

    return {
      total,
      data,
    };
  }

  // 根据用户名查找
  async findOneByName(username: string): Promise<any> {
    return this.usersRepository.findOne({
      name: username,
    });
  }

  // 根据ID查找
  async findOneById(id: string): Promise<any> {
    return this.usersRepository.findOne(id);
  }

  // 更新密码
  async updatePassword(data): Promise<any> {
    const { id, body } = data;
    const user = await this.usersRepository.findOne(id);

    let { oldPassword, password: newPassword } = body;
    oldPassword = cryptoString(oldPassword);
    body.password = cryptoString(newPassword);

    const { password } = user;
    if (password !== oldPassword) {
      return {
        statusCode: 400,
        message: '旧密码不正确。',
      };
    }

    body.updatedAt = new Date();
    delete body.oldPassword;
    delete body.rePassword;

    return await this.usersRepository.update(id, body);
  }

  // 重置密码
  async resetPassword(params): Promise<any> {
    const { id } = params;

    const password = generator.generate({
      length: 10,
      numbers: true,
      symbols: false,
    });

    const data = {
      password: cryptoString(password),
      updatedAt: new Date(),
    };

    const result = await this.usersRepository.update(id, data);

    return {
      password,
      result,
    };
  }

  // 更新头像
  async updateAvatar(params): Promise<any> {
    const { id, updateUserAvatar } = params;
    updateUserAvatar.updatedAt = new Date();
    return await this.usersRepository.update(id, updateUserAvatar);
  }

  // 数量
  async getCount() {
    return await this.usersRepository.count();
  }
}
