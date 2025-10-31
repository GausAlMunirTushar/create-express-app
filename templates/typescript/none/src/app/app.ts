import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from '@routes/user.routes';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health Check
app.get('/health', (_req, res) => {
	res.json({ message: 'Server is running' });
});

// Routes
app.use('/api/v1/users', userRoutes);

export default app;
