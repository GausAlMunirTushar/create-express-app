import morgan from 'morgan';
import logger from '../utils/logger.js';

// Stream morgan logs through Pino
const stream = {
    write: (message) => logger.info(message.trim()),
};

// Skip logging in production if needed
const skip = () => process.env.NODE_ENV === 'test';

const morganMiddleware = morgan('dev', { stream, skip });

export default morganMiddleware;
