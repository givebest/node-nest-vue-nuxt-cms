import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
export class UpdateAboutDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  route: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  banner: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  @IsBoolean()
  status: boolean;

  @ApiProperty()
  updatedAt: Date;
}
