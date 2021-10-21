import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, Raw, In } from 'typeorm';
import { cryptoString } from '../libs/lib';
import { RemoveProductDto } from './dto/remove-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  // 增加
  async create(createProductDto: CreateProductDto): Promise<any> {
    const { createdAt } = createProductDto;
    createProductDto.createdAt = createdAt || new Date();
    createProductDto.updatedAt = new Date();

    delete createProductDto.id;

    return await this.productsRepository.save(createProductDto);
  }

  // 删除
  async delete(removeProductDto: RemoveProductDto): Promise<any> {
    const { ids } = removeProductDto;

    return this.productsRepository.delete(ids);
  }

  // 更新
  async update(updateProductData): Promise<any> {
    const { id, updateProductDto } = updateProductData;
    updateProductDto.updatedAt = new Date();

    return await this.productsRepository.update(id, updateProductDto);
  }

  // 列表
  async findAll(query: any): Promise<any> {
    const { keyword, category, page = 1, limit = 10, recommend } = query;
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
        category,
      });
    }

    if (recommend) {
      whereParams = Object.assign(whereParams, {
        recommend: recommend === 'true' ? true : '',
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

    const [data, total] = await this.productsRepository.findAndCount(params);

    return {
      total,
      data,
    };
  }

  // 根据ID查找
  async findOneById(id: string): Promise<any> {
    return this.productsRepository
      .createQueryBuilder()
      .where([{ route: id }, { id }])
      .getOne();
  }

  // 数量
  async getCount() {
    return await this.productsRepository.count();
  }
}
