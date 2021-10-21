import { Module } from '@nestjs/common';
import { ProductCategoriesService } from './product-categories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategories } from './product-categories.entity';
import { ProductCategoriesController } from './product-categories.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductCategories])],
  providers: [ProductCategoriesService],
  exports: [ProductCategoriesService],
  controllers: [ProductCategoriesController],
})
export class ProductCategoriesModule {}
