import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import pino from 'pino';
import pinoHttp from 'pino-http';
import { router } from '@/routes';
import { errorMiddleware } from '@/middlewares/error.middleware';

export const logger = pino({
	level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
});

export function createApp() {
	const app = express();

	app.use(helmet());
	app.use(cors());
	app.use(express.json());
	app.use(pinoHttp({ logger }));

	app.get('/health', (_req, res) => res.json({ ok: true }));

	app.use('/api', router);

	app.use(errorMiddleware);

	return app;
}
