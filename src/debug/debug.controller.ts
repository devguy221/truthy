import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SkipThrottle } from '@nestjs/throttler';
import { DebugService } from 'src/debug/debug.service';
import { DebugLogDto } from 'src/debug/dto/debug-log.dto';

@ApiTags('debug')
@SkipThrottle()
@Controller('debug')
export class DebugController {
  constructor(private readonly debugService: DebugService) {}

  @Post('log')
  log(@Body() debugLogDto: DebugLogDto) {
    return this.debugService.log(debugLogDto);
  }
}
