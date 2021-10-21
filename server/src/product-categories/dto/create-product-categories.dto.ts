import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
export class CreateProductCategoriesDto {
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  route: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  @IsBoolean()
  status: boolean;

  @ApiProperty()
  createdAt: Date;

  updatedAt: Date;
}
