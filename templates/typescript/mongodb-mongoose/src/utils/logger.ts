import winston from 'winston';

const logger = winston.createLogger({
	level: 'info',
	transports: [
		new winston.transports.Console({
			format: winston.format.combine(
				winston.format.colorize(),
				winston.format.simple(),
			),
		}),
		new winston.transports.File({
			filename: 'server.log',
			level: 'info',
		}),
	],
});

export { logger };
