import { z } from 'zod';

export const createUserSchema = z.object({
	body: z.object({
		email: z.string().email(),
		name: z.string().min(2).max(120),
		password: z.string().min(6),
	}),
});

export const loginSchema = z.object({
	body: z.object({
		email: z.string().email(),
		password: z.string().min(6),
	}),
});
