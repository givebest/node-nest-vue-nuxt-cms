import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CreateHomeDto } from './dto/create-home.dto';
import { Home } from './home.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, Raw, In } from 'typeorm';
import { RemoveHomeDto } from './dto/remove-home.dto';

@Injectable()
export class HomeService {
  constructor(
    @InjectRepository(Home)
    private homeRepository: Repository<Home>,
  ) {}

  // 增加
  async create(createHomeDto: CreateHomeDto): Promise<any> {
    const { createdAt } = createHomeDto;
    createHomeDto.createdAt = createdAt || new Date();
    createHomeDto.updatedAt = new Date();

    delete createHomeDto.id;

    return await this.homeRepository.save(createHomeDto);
  }

  // 删除
  async delete(removeHomeDto: RemoveHomeDto): Promise<any> {
    const { ids } = removeHomeDto;

    return this.homeRepository.delete(ids);
  }

  // 更新
  async update(updateHomeData): Promise<any> {
    const { id, updateHomeDto } = updateHomeData;
    updateHomeDto.updatedAt = new Date();

    return await this.homeRepository.update(id, updateHomeDto);
  }

  // 列表
  async findAll(query: any): Promise<any> {
    const { keyword, category, page = 1, limit = 10 } = query;
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

    if (category) {
      whereParams = Object.assign(whereParams, {
        category: In(category),
      });
    }

    params = Object.assign(
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

    const [data, total] = await this.homeRepository.findAndCount(params);

    return {
      total,
      data,
    };
  }

  // 根据ID查找
  async findOneById(id: string): Promise<any> {
    return this.homeRepository.findOne(id);
  }

  // 数量
  async getCount() {
    return await this.homeRepository.count();
  }
}
