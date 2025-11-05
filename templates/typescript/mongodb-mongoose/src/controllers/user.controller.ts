import { Request, Response, NextFunction } from 'express';
import * as userService from '@/services/user.service';
import { Constants } from '@/config/constants';

export const getAllUsers = async (
	_req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const users = await userService.getAllUsers();
		res.status(Constants.HTTP_STATUS.OK).json({
			success: true,
			count: users.length,
			data: users,
		});
	} catch (err) {
		next(err);
	}
};

export const createUser = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const user = await userService.createUser(req.body);
		res.status(Constants.HTTP_STATUS.CREATED).json({
			success: true,
			data: user,
		});
	} catch (err) {
		next(err);
	}
};
