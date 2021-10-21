import { ApiProperty } from '@nestjs/swagger';
export class FindUserDto {
  @ApiProperty({
    required: false,
  })
  keyword: string;

  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;
}
