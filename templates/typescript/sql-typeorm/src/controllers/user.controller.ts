import { Request, Response, NextFunction } from 'express';
import * as service from '@/services/user.service';

export async function list(_req: Request, res: Response, next: NextFunction) {
	try {
		const data = await service.list();
		res.json({ data });
	} catch (e) {
		next(e);
	}
}

export async function getById(req: Request, res: Response, next: NextFunction) {
	try {
		const data = await service.getById(req.params.id);
		res.json({ data });
	} catch (e) {
		next(e);
	}
}

export async function create(req: Request, res: Response, next: NextFunction) {
	try {
		const data = await service.create(req.body);
		res.status(201).json({ data });
	} catch (e) {
		next(e);
	}
}

export async function login(req: Request, res: Response, next: NextFunction) {
	try {
		const token = await service.login(req.body.email, req.body.password);
		res.json({ token });
	} catch (e) {
		next(e);
	}
}
