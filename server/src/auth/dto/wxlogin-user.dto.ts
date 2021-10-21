import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class WxLoginUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  openId: string;
}
