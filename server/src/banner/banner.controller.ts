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
  Logger,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateBannerDto } from './dto/create-banner.dto';
import { BannerService } from './banner.service';
import { Banner } from './banner.entity';
import { RemoveBannerDto } from './dto/remove-banner.dto';
import { RetrieveBannerDto } from './dto/retrieve-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { FindBannerDto } from './dto/find-banner.dto';
import { JwtAuthGuardUser } from 'src/auth/guards/jwt-auth.guard';

import { Log } from 'src/libs/utils';

@ApiTags('Banner')
@Controller('api/banner')
export class BannerController {
  constructor(private readonly bannersService: BannerService) {}

  // 增加
  @UseGuards(JwtAuthGuardUser)
  @Post()
  @ApiOperation({ summary: '增加' })
  async create(@Body() createBannerDto: CreateBannerDto): Promise<Banner> {
    return await this.bannersService.create(createBannerDto);
  }

  // 删除
  @UseGuards(JwtAuthGuardUser)
  @Delete()
  @ApiOperation({ summary: '删除' })
  async remove(
    @Body() removeBannerDto: RemoveBannerDto,
    @Request() req,
  ): Promise<any> {
    Log({ req });
    return await this.bannersService.delete(removeBannerDto);
  }

  // 更新
  @UseGuards(JwtAuthGuardUser)
  @Put(':id')
  @ApiOperation({ summary: '更新' })
  async update(
    @Param() params: RetrieveBannerDto,
    @Body() updateBannerDto: UpdateBannerDto,
  ): Promise<any> {
    return await this.bannersService.update({
      id: params.id,
      updateBannerDto,
    });
  }

  // 列表
  // @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: '列表' })
  async findAll(@Query() query: FindBannerDto): Promise<Banner> {
    return await this.bannersService.findAll(query);
  }

  // 根据 id 查找
  @Get(':id')
  @ApiOperation({ summary: '根据 id 查找' })
  async findOneById(@Param() params: RetrieveBannerDto): Promise<any> {
    return await this.bannersService.findOneById(params.id);
  }

  // 数量
  @Get('list/count')
  @ApiOperation({ summary: '用户数量' })
  async getCount() {
    return await this.bannersService.getCount();
  }
}
