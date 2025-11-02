import { Request, Response, NextFunction } from 'express';
import { User } from '@/models/user.model';
import bcrypt from 'bcryptjs';

export async function getUsers(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		const users = await User.findAll();
		res.json(users);
	} catch (e) {
		next(e);
	}
}

export async function createUser(
	req: Request,
	res: Response,
	next: NextFunction,
) {
	try {
		const { name, email, password } = req.body;
		const hashed = await bcrypt.hash(password, 10);
		const user = await User.create({ name, email, password: hashed });
		res.status(201).json(user);
	} catch (e) {
		next(e);
	}
}
