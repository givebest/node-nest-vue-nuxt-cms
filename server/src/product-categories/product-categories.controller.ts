import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Get,
  Delete,
  Put,
  Param,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateProductCategoriesDto } from './dto/create-product-categories.dto';
import { ProductCategoriesService } from './product-categories.service';
import { ProductCategories } from './product-categories.entity';
import { RemoveProductCategoriesDto } from './dto/remove-product-categories.dto';
import { RetrieveProductCategoriesDto } from './dto/retrieve-product-categories.dto';
import { UpdateProductCategoriesDto } from './dto/update-product-categories.dto';
import { FindProductCategoriesDto } from './dto/find-product-categories.dto';
import { JwtAuthGuardUser } from 'src/auth/guards/jwt-auth.guard';

import { Log } from 'src/libs/utils';
@ApiTags('产品分类')
@Controller('api/product-categories')
export class ProductCategoriesController {
  constructor(
    private readonly productCategoriesService: ProductCategoriesService,
  ) {}

  // 增加
  @UseGuards(JwtAuthGuardUser)
  @Post()
  @ApiOperation({ summary: '增加' })
  async create(
    @Body() createProductCategoriesDto: CreateProductCategoriesDto,
  ): Promise<ProductCategories> {
    return await this.productCategoriesService.create(
      createProductCategoriesDto,
    );
  }

  // 删除
  @UseGuards(JwtAuthGuardUser)
  @Delete()
  @ApiOperation({ summary: '删除' })
  async remove(
    @Body() removeProductCategoriesDto: RemoveProductCategoriesDto,
    @Request() req,
  ): Promise<any> {
    Log({ req });
    return await this.productCategoriesService.delete(
      removeProductCategoriesDto,
    );
  }

  // 更新
  @UseGuards(JwtAuthGuardUser)
  @Put(':id')
  @ApiOperation({ summary: '更新' })
  async update(
    @Param() params: RetrieveProductCategoriesDto,
    @Body() updateProductCategoriesDto: UpdateProductCategoriesDto,
  ): Promise<any> {
    return await this.productCategoriesService.update({
      id: params.id,
      updateProductCategoriesDto,
    });
  }

  // 列表
  // @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: '列表' })
  async findAll(
    @Query() query: FindProductCategoriesDto,
  ): Promise<ProductCategories> {
    return await this.productCategoriesService.findAll(query);
  }

  // 根据 id 查找
  @Get(':id')
  @ApiOperation({ summary: '根据 id 查找' })
  async findOneById(
    @Param() params: RetrieveProductCategoriesDto,
  ): Promise<any> {
    return await this.productCategoriesService.findOneById(params.id);
  }

  // 数量
  @Get('list/count')
  @ApiOperation({ summary: '用户数量' })
  async getCount() {
    return await this.productCategoriesService.getCount();
  }
}
