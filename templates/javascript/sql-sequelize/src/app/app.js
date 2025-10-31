import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import dotenv from 'dotenv';
import routes from '../routes/index.js';
import errorHandler from '../middlewares/errorHandler.js';
import logger from '../utils/logger.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.CORS_ORIGIN || '*', credentials: true }));
app.use(helmet());
app.use(compression());
app.use(morgan('dev', { stream: logger.stream }));

// Routes
app.use('/api/v1', routes);

// Error Handling
app.use(errorHandler);

export default app;
