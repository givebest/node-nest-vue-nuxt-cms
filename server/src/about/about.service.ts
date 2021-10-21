import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CreateAboutDto } from './dto/create-about.dto';
import { About } from './about.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, Raw, In } from 'typeorm';
import { RemoveAboutDto } from './dto/remove-about.dto';

@Injectable()
export class AboutService {
  constructor(
    @InjectRepository(About)
    private aboutRepository: Repository<About>,
  ) {}

  // 增加
  async create(createAboutDto: CreateAboutDto): Promise<any> {
    const { createdAt } = createAboutDto;
    createAboutDto.createdAt = createdAt || new Date();
    createAboutDto.updatedAt = new Date();

    delete createAboutDto.id;

    return await this.aboutRepository.save(createAboutDto);
  }

  // 删除
  async delete(removeAboutDto: RemoveAboutDto): Promise<any> {
    const { ids } = removeAboutDto;

    return this.aboutRepository.delete(ids);
  }

  // 更新
  async update(updateAboutData): Promise<any> {
    const { id, updateAboutDto } = updateAboutData;
    updateAboutDto.updatedAt = new Date();

    return await this.aboutRepository.update(id, updateAboutDto);
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

    const [data, total] = await this.aboutRepository.findAndCount(params);

    return {
      total,
      data,
    };
  }

  // 根据ID查找
  async findOneById(params: any): Promise<any> {
    const { id } = params;

    return this.aboutRepository
      .createQueryBuilder('about')
      .where([{ category: id }, { id }])
      .getOne();
  }

  // 数量
  async getCount() {
    return await this.aboutRepository.count();
  }
}
