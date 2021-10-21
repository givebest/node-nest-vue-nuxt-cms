import { IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RemoveProductDto {
  @ApiProperty()
  @IsArray()
  ids: [];
}
