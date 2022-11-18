import { PartialType } from '@nestjs/swagger';

import { CreateDebugDto } from './create-debug.dto';

export class UpdateDebugDto extends PartialType(CreateDebugDto) {}
