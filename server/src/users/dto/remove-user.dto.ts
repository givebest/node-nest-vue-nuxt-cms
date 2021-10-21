import { IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RemoveUserDto {
  @ApiProperty()
  @IsArray()
  ids: [];
}
