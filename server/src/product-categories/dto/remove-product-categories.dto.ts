import { IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RemoveProductCategoriesDto {
  @ApiProperty()
  @IsArray()
  ids: [];
}
