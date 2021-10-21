import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CreateBannerDto } from './dto/create-banner.dto';
import { Banner } from './banner.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, Raw, In } from 'typeorm';
import { RemoveBannerDto } from './dto/remove-banner.dto';

@Injectable()
export class BannerService {
  constructor(
    @InjectRepository(Banner)
    private bannerRepository: Repository<Banner>,
  ) {}

  // 增加
  async create(createBannerDto: CreateBannerDto): Promise<any> {
    const { createdAt } = createBannerDto;
    createBannerDto.createdAt = createdAt || new Date();
    createBannerDto.updatedAt = new Date();

    delete createBannerDto.id;

    return await this.bannerRepository.save(createBannerDto);
  }

  // 删除
  async delete(removeBannerDto: RemoveBannerDto): Promise<any> {
    const { ids } = removeBannerDto;

    return this.bannerRepository.delete(ids);
  }

  // 更新
  async update(updateBannerData): Promise<any> {
    const { id, updateBannerDto } = updateBannerData;
    updateBannerDto.updatedAt = new Date();

    return await this.bannerRepository.update(id, updateBannerDto);
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

    const [data, total] = await this.bannerRepository.findAndCount(params);

    return {
      total,
      data,
    };
  }

  // 根据ID查找
  async findOneById(id: string): Promise<any> {
    return this.bannerRepository.findOne(id);
  }

  // 数量
  async getCount() {
    return await this.bannerRepository.count();
  }
}
