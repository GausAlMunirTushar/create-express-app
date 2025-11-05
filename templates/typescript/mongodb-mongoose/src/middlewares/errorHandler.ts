import { Request, Response } from 'express';
import logger from '@/utils/logger';
import ApiError from '@/utils/ApiError';
import config from '@/config/environment';

const errorHandler = (err: Error | ApiError, _req: Request, res: Response) => {
	const status = (err as ApiError).statusCode || 500;
	const message = err.message || 'Internal Server Error';

	// Log format depending on environment
	if (config.isDevelopment) {
		logger.error({
			msg: `[${status}] ${message}`,
			stack: err.stack,
		});
	} else {
		logger.error(`[${status}] ${message}`);
	}

	res.status(status).json({
		success: false,
		message,
		...(config.isDevelopment && { stack: err.stack }),
	});
};

export default errorHandler;
