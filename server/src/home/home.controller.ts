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
import { CreateHomeDto } from './dto/create-home.dto';
import { HomeService } from './home.service';
import { Home } from './home.entity';
import { RemoveHomeDto } from './dto/remove-home.dto';
import { RetrieveHomeDto } from './dto/retrieve-home.dto';
import { UpdateHomeDto } from './dto/update-home.dto';
import { FindHomeDto } from './dto/find-home.dto';
import { JwtAuthGuardUser } from 'src/auth/guards/jwt-auth.guard';

import { Log } from 'src/libs/utils';
@ApiTags('首页')
@Controller('api/home')
export class HomeController {
  constructor(private readonly homesService: HomeService) {}

  // 增加
  @UseGuards(JwtAuthGuardUser)
  @Post()
  @ApiOperation({ summary: '增加' })
  async create(@Body() createHomeDto: CreateHomeDto): Promise<Home> {
    return await this.homesService.create(createHomeDto);
  }

  // 删除
  @UseGuards(JwtAuthGuardUser)
  @Delete()
  @ApiOperation({ summary: '删除' })
  async remove(
    @Body() removeHomeDto: RemoveHomeDto,
    @Request() req,
  ): Promise<any> {
    Log({ req });
    return await this.homesService.delete(removeHomeDto);
  }

  // 更新
  @UseGuards(JwtAuthGuardUser)
  @Put(':id')
  @ApiOperation({ summary: '更新' })
  async update(
    @Param() params: RetrieveHomeDto,
    @Body() updateHomeDto: UpdateHomeDto,
  ): Promise<any> {
    return await this.homesService.update({
      id: params.id,
      updateHomeDto,
    });
  }

  // 列表
  // @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: '列表' })
  async findAll(@Query() query: FindHomeDto): Promise<Home> {
    return await this.homesService.findAll(query);
  }

  // 根据 id 查找
  @Get(':id')
  @ApiOperation({ summary: '根据 id 查找' })
  async findOneById(@Param() params: RetrieveHomeDto): Promise<any> {
    return await this.homesService.findOneById(params.id);
  }

  // 数量
  @Get('list/count')
  @ApiOperation({ summary: '用户数量' })
  async getCount() {
    return await this.homesService.getCount();
  }
}
