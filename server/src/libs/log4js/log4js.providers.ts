import * as log4js from 'log4js';
import { FactoryProvider } from '@nestjs/common';
import {
  getLog4jsLoggerToken,
  getLog4jsOptionsToken,
  Log4jsAsyncOptions,
  Log4jsOptions,
  Log4jsOptionsFactory
} from './log4js.options';
import { Type } from '@nestjs/common/interfaces/type.interface';
import { Log4jsLogger } from './log4js.classes';
import { parseNestModuleCallStack } from './log4js.extentions';

export type Log4jsLoggerFactoryProvider = FactoryProvider<Log4jsLogger | Promise<Log4jsLogger>>;
export type Log4jsOptionsFactoryProvider = FactoryProvider<Log4jsOptions | Promise<Log4jsOptions>>;

export const createLog4jsLogger = (name: string): Log4jsLoggerFactoryProvider => ({
  provide: getLog4jsLoggerToken(name),
  inject: [getLog4jsOptionsToken(name)],
  useFactory: async (options: Log4jsOptions): Promise<Log4jsLogger> => {
    const config = options.config;
    const logger = log4js.configure(config).getLogger();

    logger.setParseCallStackFunction(parseNestModuleCallStack);

    // TODO: add log4js instance container so we can get different logger instance
    return new Log4jsLogger(logger);
  }
});

export const createAsyncLog4jsOptions = (options: Log4jsAsyncOptions): Log4jsOptionsFactoryProvider => {
  if (options.useFactory) {
    return {
      provide: getLog4jsOptionsToken(options.name),
      inject: options.inject,
      useFactory: options.useFactory
    };
  }

  const inject = [(options.useClass || options.useExisting) as Type<Log4jsOptionsFactory>];

  return {
    provide: getLog4jsOptionsToken(options.name),
    inject: inject,
    useFactory: async (log4jsOptionsFactory: Log4jsOptionsFactory) => {
      return log4jsOptionsFactory.createLog4jsOptions();
    }
  };
};
