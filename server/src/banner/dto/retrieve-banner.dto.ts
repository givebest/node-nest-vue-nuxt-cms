import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RetrieveBannerDto {
  @ApiProperty()
  @IsString()
  id: string;
}
