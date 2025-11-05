import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import rateLimit from 'express-rate-limit';

import morganMiddleware from '@/middlewares/morgan.middleware';
import errorHandler from '@/middlewares/errorHandler';
import { notFoundHandler } from '@/middlewares/notFoundHandler';
import router from '@/routes/index';

const app: Express = express();

// Logging
app.use(morganMiddleware);

// Security & Performance
app.use(helmet());
app.use(compression());
app.use(
	rateLimit({
		windowMs: 15 * 60 * 1000,
		max: 100,
		standardHeaders: true,
	}),
);

// CORS
app.use(
	cors({
		origin: process.env.CLIENT_URL || 'http://localhost:3000',
		credentials: true,
	}),
);

// Body Parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1', router);

// Error Handling
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
