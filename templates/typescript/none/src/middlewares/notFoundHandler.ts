import { Request, Response, NextFunction } from 'express';
import ApiError from '@/utils/ApiError';
import { Constants } from '@/config/constants';

export const notFoundHandler = (
	req: Request,
	_res: Response,
	next: NextFunction,
) => {
	next(
		new ApiError(
			Constants.HTTP_STATUS.NOT_FOUND,
			`Route not found: ${req.method} ${req.originalUrl}`,
		),
	);
};
