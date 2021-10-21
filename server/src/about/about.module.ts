import { Module } from '@nestjs/common';
import { AboutService } from './about.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { About } from './about.entity';
import { AboutController } from './about.controller';

@Module({
  imports: [TypeOrmModule.forFeature([About])],
  providers: [AboutService],
  exports: [AboutService],
  controllers: [AboutController],
})
export class AboutModule {}
