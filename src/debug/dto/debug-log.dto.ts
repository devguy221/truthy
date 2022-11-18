import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, ValidateIf } from 'class-validator';

export class DebugLogDto {
  @ApiProperty()
  @IsNotEmpty()
  line: string;

  @ApiPropertyOptional()
  @ValidateIf((object, value) => value)
  value: any;
}
