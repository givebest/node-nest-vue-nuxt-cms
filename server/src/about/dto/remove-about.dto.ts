import { IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RemoveAboutDto {
  @ApiProperty()
  @IsArray()
  ids: [];
}
