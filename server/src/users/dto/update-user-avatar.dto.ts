import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdataUserAvatarDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly avatar: string;

  updatedAt: Date;
}
