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
import { CreateAboutDto } from './dto/create-about.dto';
import { AboutService } from './about.service';
import { About } from './about.entity';
import { RemoveAboutDto } from './dto/remove-about.dto';
import { RetrieveAboutDto } from './dto/retrieve-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { FindAboutDto } from './dto/find-about.dto';
import { JwtAuthGuardUser } from 'src/auth/guards/jwt-auth.guard';
import { Log } from 'src/libs/utils';
@ApiTags('关于我们')
@Controller('api/about')
export class AboutController {
  constructor(private readonly aboutsService: AboutService) {}

  // 增加
  @UseGuards(JwtAuthGuardUser)
  @Post()
  @ApiOperation({ summary: '增加' })
  async create(@Body() createAboutDto: CreateAboutDto): Promise<About> {
    return await this.aboutsService.create(createAboutDto);
  }

  // 删除
  @UseGuards(JwtAuthGuardUser)
  @Delete()
  @ApiOperation({ summary: '删除' })
  async remove(
    @Body() removeAboutDto: RemoveAboutDto,
    @Request() req,
  ): Promise<any> {
    Log({ req });
    return await this.aboutsService.delete(removeAboutDto);
  }

  // 更新
  @UseGuards(JwtAuthGuardUser)
  @Put(':id')
  @ApiOperation({ summary: '更新' })
  async update(
    @Param() params: RetrieveAboutDto,
    @Body() updateAboutDto: UpdateAboutDto,
  ): Promise<any> {
    return await this.aboutsService.update({
      id: params.id,
      updateAboutDto,
    });
  }

  // 列表
  // @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: '列表' })
  async findAll(@Query() query: FindAboutDto): Promise<About> {
    return await this.aboutsService.findAll(query);
  }

  // 根据 id 查找
  @Get(':id')
  @ApiOperation({ summary: '根据 id 查找' })
  async findOneById(@Param() params: RetrieveAboutDto): Promise<any> {
    return await this.aboutsService.findOneById(params);
  }

  // 数量
  @Get('list/count')
  @ApiOperation({ summary: '用户数量' })
  async getCount() {
    return await this.aboutsService.getCount();
  }
}
