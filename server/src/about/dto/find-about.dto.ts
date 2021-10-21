import { ApiProperty } from '@nestjs/swagger';
export class FindAboutDto {
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
}
