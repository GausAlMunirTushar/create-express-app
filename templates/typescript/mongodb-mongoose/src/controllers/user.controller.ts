import { Request, Response } from 'express';
import User from '@models/user.model';

export const getAllUsers = async (req: Request, res: Response) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: 'Error fetching users', error });
	}
};

export const createUser = async (req: Request, res: Response) => {
	try {
		const { name, email, password } = req.body;
		const user = new User({ name, email, password });
		await user.save();
		res.status(201).json(user);
	} catch (error) {
		res.status(400).json({ message: 'Error creating user', error });
	}
};
