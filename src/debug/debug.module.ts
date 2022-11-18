import { Module } from '@nestjs/common';
import { DebugController } from 'src/debug/debug.controller';
import { DebugService } from 'src/debug/debug.service';

@Module({
  controllers: [DebugController],
  providers: [DebugService]
})
export class DebugModule {}
