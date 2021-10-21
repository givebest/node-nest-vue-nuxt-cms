import { IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RemoveBannerDto {
  @ApiProperty()
  @IsArray()
  ids: [];
}
