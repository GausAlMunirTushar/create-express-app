import dotenv from 'dotenv';
import app from './app';
import config from '@/config/environment';
import logger from '@/utils/logger';

dotenv.config();

// Start server
const server = app.listen(config.port, () => {
	logger.info(`Server running at http://${config.host}:${config.port}`);
});

// Graceful shutdown
const shutdown = (signal: string) => {
	logger.info(`${signal} received. Shutting down gracefully...`);
	server.close(() => {
		logger.info('Server closed.');
		process.exit(0);
	});
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
