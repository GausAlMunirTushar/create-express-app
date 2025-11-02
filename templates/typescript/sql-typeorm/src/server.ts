import 'reflect-metadata';
import { createApp, logger } from './app';
import { AppDataSource } from './config/data-source';
import { env } from '@/config/env';

async function bootstrap() {
	await AppDataSource.initialize();
	logger.info('📦 DataSource initialized');

	const app = createApp();
	app.listen(env.PORT, () =>
		logger.info(`🚀 Server listening on http://localhost:${env.PORT}`),
	);
}

bootstrap().catch((err) => {
	console.error('Failed to start:', err);
	process.exit(1);
});
