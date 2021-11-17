import { Configuration } from 'log4js';

export const LOG4JS_OPTIONS = Symbol('NEST_LOG4JS_OPTIONS');
export const LOG4JS_LOGGER = Symbol('NEST_LOG4JS_LOGGER');

export const LOG4JS_DEFAULT_LAYOUT = {
  type: 'pattern',
  // log4js default pattern %d{yyyy-MM-dd HH:mm:ss:SSS} [%thread] %-5level %logger{36} - %msg%n
  // we use process id instead thread id
  pattern: '%[%d{yyyy-MM-dd hh:mm:ss:SSS} %-5.5p --- [%15.15x{name}]%] %40.40f{3}  : %m',
  tokens: {
    name: (logEvent) => {
      return (logEvent.context && logEvent.context['name']) || '-';
    }
  }
};

export const LOG4JS_NO_COLOUR_DEFAULT_LAYOUT = {
  type: 'pattern',
  // log4js default pattern %d{yyyy-MM-dd HH:mm:ss:SSS} [%thread] %-5level %logger{36} - %msg%n
  // we use process id instead thread id
  pattern: '%d{yyyy-MM-dd hh:mm:ss:SSS} %-5.5p --- [%15.15x{name}] %40.40f{3}  : %m',
  tokens: {
    name: (logEvent) => {
      return (logEvent.context && logEvent.context['name']) || '-';
    }
  }
};

export const LOG4JS_DEFAULT_CONFIG: Configuration = {
  appenders: {
    stdout: {
      type: 'stdout',
      layout: LOG4JS_DEFAULT_LAYOUT
    },
    file: {
      type: 'file',
      filename: './logs/application.log',
      maxLogSize: 20 * 1024 * 1024, // maxLogSize use bytes ad unit
      backups: 10, // default use 5 so 1KB file size total rotating
      layout: LOG4JS_NO_COLOUR_DEFAULT_LAYOUT
    }
  },
  categories: {
    default: {
      enableCallStack: true,
      appenders: ['stdout', 'file'],
      level: 'debug'
    }
  }
};
