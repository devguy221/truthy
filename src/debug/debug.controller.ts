import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

  @Get()
  findAll() {
    return this.debugService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.debugService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.debugService.remove(+id);
  }
}
