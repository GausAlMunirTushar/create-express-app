import { Router } from 'express';
import userRoutes from './user.routes';

export const router = Router();

router.use('/users', userRoutes);
