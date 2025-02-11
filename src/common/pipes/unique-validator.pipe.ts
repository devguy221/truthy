import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { ValidatorConstraint } from 'class-validator';
import { AbstractUniqueValidator } from 'src/common/pipes/abstract-unique-validator';
import { Connection } from 'typeorm';

/**
 * unique validator pipe
 */
@ValidatorConstraint({
  name: 'unique',
  async: true
})
@Injectable()
export class UniqueValidatorPipe extends AbstractUniqueValidator {
  constructor(
    @InjectConnection()
    protected readonly connection: Connection
  ) {
    super(connection);
  }
}
