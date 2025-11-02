import { Router } from 'express';
import * as ctrl from '@/controllers/user.controller';
import { validate } from '@/middlewares/validate.middleware';
import { createUserSchema, loginSchema } from '@/schemas/user.schema';

const r = Router();

r.get('/', ctrl.list);
r.get('/:id', ctrl.getById);
r.post('/', validate(createUserSchema), ctrl.create);
r.post('/login', validate(loginSchema), ctrl.login);

export default r;
