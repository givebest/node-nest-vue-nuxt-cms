import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
export class UpdateBannerDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  intro: string;

  @ApiProperty()
  @IsBoolean()
  status: boolean;

  @ApiProperty()
  updatedAt: Date;
}
