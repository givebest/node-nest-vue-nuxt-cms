import { ApiProperty } from '@nestjs/swagger';
import { BlobOptions } from 'buffer';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
export class CreateProductDto {
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  route: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  pic: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  category: string;

  @ApiProperty()
  intro: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  recommend: boolean;

  @ApiProperty()
  @IsBoolean()
  status: boolean;

  @ApiProperty()
  createdAt: Date;

  updatedAt: Date;
}
