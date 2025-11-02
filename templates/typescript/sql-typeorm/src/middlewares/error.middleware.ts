import { NextFunction, Request, Response } from 'express';

export class NotFoundError extends Error {
	status = 404;
}
export class BadRequestError extends Error {
	status = 400;
}

export function errorMiddleware(
	err: any,
	_req: Request,
	res: Response,
	_next: NextFunction,
) {
	const status = err.status ?? 500;
	const message = err.message ?? 'Internal Server Error';
	res.status(status).json({ error: message });
}
