import { Request, Response, NextFunction } from 'express';
import { Constants } from '@/config/constants';
import { userService } from '@/services/index';

export const getAllUsers = async (
	_req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const users = await userService.fetchUsers();
		res.status(Constants.HTTP_STATUS.OK).json({
			success: true,
			count: users.length,
			data: users,
		});
	} catch (err) {
		next(err);
	}
};
