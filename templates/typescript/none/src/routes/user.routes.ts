import { userController } from '@/controllers/index';
import { Router } from 'express';

const router = Router();

// Example route
router.get('/', userController.getAllUsers);

export default router;
