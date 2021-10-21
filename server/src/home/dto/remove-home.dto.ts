import { IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RemoveHomeDto {
  @ApiProperty()
  @IsArray()
  ids: [];
}
