import morgan from 'morgan';
import logger from '@/utils/logger';

const morganMiddleware = morgan(
	':method :url :status :res[content-length] - :response-time ms',
	{
		stream: {
			write: (message: string) => logger.info(message.trim()),
		},
	},
);

export default morganMiddleware;
