import { Injectable } from '@nestjs/common';

import { CreateDebugDto } from './dto/create-debug.dto';
import { UpdateDebugDto } from './dto/update-debug.dto';

@Injectable()
export class DebugService {
  create(createDebugDto: CreateDebugDto) {
    return 'This action adds a new debug';
  }

  findAll() {
    return `This action returns all debug`;
  }

  findOne(id: number) {
    return `This action returns a #${id} debug`;
  }

  update(id: number, updateDebugDto: UpdateDebugDto) {
    return `This action updates a #${id} debug`;
  }

  remove(id: number) {
    return `This action removes a #${id} debug`;
  }
}
