import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
export class CreateHomeDto {
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  intro: string;

  @ApiProperty()
  @IsBoolean()
  status: boolean;

  @ApiProperty()
  createdAt: Date;

  updatedAt: Date;
}
