import 'express';

declare module 'express' {
	export interface Request {
		user?: {
			id: string;
			role: string;
		};
	}
}
