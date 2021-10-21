import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { CreateProductCategoriesDto } from './dto/create-product-categories.dto';
import { ProductCategories } from './product-categories.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like, Raw, In } from 'typeorm';
import { RemoveProductCategoriesDto } from './dto/remove-product-categories.dto';

@Injectable()
export class ProductCategoriesService {
  constructor(
    @InjectRepository(ProductCategories)
    private productCategoriesRepository: Repository<ProductCategories>,
  ) {}

  // 增加
  async create(
    createProductCategoriesDto: CreateProductCategoriesDto,
  ): Promise<any> {
    const { createdAt } = createProductCategoriesDto;
    createProductCategoriesDto.createdAt = createdAt || new Date();
    createProductCategoriesDto.updatedAt = new Date();

    delete createProductCategoriesDto.id;

    return await this.productCategoriesRepository.save(
      createProductCategoriesDto,
    );
  }

  // 删除
  async delete(
    removeProductCategoriesDto: RemoveProductCategoriesDto,
  ): Promise<any> {
    const { ids } = removeProductCategoriesDto;

    return this.productCategoriesRepository.delete(ids);
  }

  // 更新
  async update(updateProductCategoriesData): Promise<any> {
    const { id, updateProductCategoriesDto } = updateProductCategoriesData;
    updateProductCategoriesDto.updatedAt = new Date();

    return await this.productCategoriesRepository.update(
      id,
      updateProductCategoriesDto,
    );
  }

  // 列表
  async findAll(query: any): Promise<any> {
    const { keyword, category, page = 1, limit = 100 } = query;
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

    const [data, total] = await this.productCategoriesRepository.findAndCount(
      params,
    );

    return {
      total,
      data,
    };
  }

  // 根据ID查找
  async findOneById(id: string): Promise<any> {
    return this.productCategoriesRepository
      .createQueryBuilder()
      .where([{ route: id }, { id }])
      .getOne();
  }

  // 数量
  async getCount() {
    return await this.productCategoriesRepository.count();
  }
}
