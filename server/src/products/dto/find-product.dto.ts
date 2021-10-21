import { ApiProperty } from '@nestjs/swagger';
export class FindProductDto {
  @ApiProperty({
    required: false,
  })
  keyword: string;

  @ApiProperty({
    required: false,
  })
  category: string;

  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;

  @ApiProperty({
    required: false,
  })
  recommend: boolean;
}
