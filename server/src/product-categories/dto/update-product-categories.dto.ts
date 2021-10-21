import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
export class UpdateProductCategoriesDto {
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
  updatedAt: Date;
}
