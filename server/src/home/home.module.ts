import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Home } from './home.entity';
import { HomeController } from './home.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Home])],
  providers: [HomeService],
  exports: [HomeService],
  controllers: [HomeController],
})
export class HomeModule {}
