import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RetrieveProductDto {
  @ApiProperty()
  @IsString()
  id: string;
}
