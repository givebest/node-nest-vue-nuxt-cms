import { Module } from '@nestjs/common';
import { BannerService } from './banner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Banner } from './banner.entity';
import { BannerController } from './banner.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Banner])],
  providers: [BannerService],
  exports: [BannerService],
  controllers: [BannerController],
})
export class BannerModule {}
