import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RetrieveUserDto {
  @ApiProperty()
  @IsString()
  id: string;
}
