import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import pino from 'pino';
import pinoHttp from 'pino-http';
import { router } from '@/routes/user.routes';
import { errorHandler } from '@/middlewares/error.middleware';

export const logger = pino({ level: 'debug' });

export function createApp() {
	const app = express();
	app.use(cors());
	app.use(helmet());
	app.use(express.json());
	app.use(pinoHttp({ logger }));

	app.get('/health', (_, res) => res.json({ ok: true }));
	app.use('/api', router);
	app.use(errorHandler);

	return app;
}
