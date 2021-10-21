import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RetrieveHomeDto {
  @ApiProperty()
  @IsString()
  id: string;
}
