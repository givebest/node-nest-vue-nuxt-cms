import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RetrieveProductCategoriesDto {
  @ApiProperty()
  @IsString()
  id: string;
}
