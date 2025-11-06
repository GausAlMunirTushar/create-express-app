import pino from 'pino';
import environment from '../config/environment.js';

const logger = pino({
    level: environment.logLevel,
    transport: !environment.isProduction
        ? {
              target: 'pino-pretty',
              options: {
                  colorize: true,
                  translateTime: 'SYS:yyyy-mm-dd HH:MM:ss',
                  ignore: 'pid,hostname',
              },
          }
        : undefined,
});

export default logger;
