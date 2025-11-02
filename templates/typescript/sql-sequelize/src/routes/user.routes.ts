import { Router } from 'express';
import { createUser, getUsers } from '@/controllers/user.controller';

export const router = Router();

router.get('/users', getUsers);
router.post('/users', createUser);
