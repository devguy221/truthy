import * as winston from 'winston';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModuleOptions
} from 'nest-winston';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  format: winston.format.colorize(),
  exitOnError: false,
  transports: isProduction
    ? new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.ms(),
          nestWinstonModuleUtilities.format.nestLike('Truthy Logger', {
            prettyPrint: true
          })
        )
      })
    : new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.ms(),
          nestWinstonModuleUtilities.format.nestLike('Truthy Logger', {
            prettyPrint: true
          })
        )
      })
} as WinstonModuleOptions;
