import { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';

export const validate =
	(schema: ZodSchema) =>
	(req: Request, res: Response, next: NextFunction) => {
		const result = schema.safeParse({
			body: req.body,
			params: req.params,
			query: req.query,
		});
		if (!result.success) {
			return res.status(400).json({ errors: result.error.flatten() });
		}
		next();
	};
