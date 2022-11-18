import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';

import { DebugService } from './debug.service';
import { CreateDebugDto } from './dto/create-debug.dto';
import { UpdateDebugDto } from './dto/update-debug.dto';

@Controller('debug')
export class DebugController {
  constructor(private readonly debugService: DebugService) {}

  @Post()
  create(@Body() createDebugDto: CreateDebugDto) {
    return this.debugService.create(createDebugDto);
  }

  @Get()
  findAll() {
    return this.debugService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.debugService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDebugDto: UpdateDebugDto) {
    return this.debugService.update(+id, updateDebugDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.debugService.remove(+id);
  }
}
