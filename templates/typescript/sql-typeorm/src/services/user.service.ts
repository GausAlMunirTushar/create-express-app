import { AppDataSource } from '@/config/data-source';
import { User } from '@/entities/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { env } from '@/config/env';
import { NotFoundError, BadRequestError } from '@/middlewares/error.middleware';

const repo = AppDataSource.getRepository(User);

export async function list() {
	return repo.find();
}

export async function getById(id: string) {
	const user = await repo.findOne({ where: { id } });
	if (!user) throw new NotFoundError('User not found');
	return user;
}

export async function create(input: Pick<User, 'email' | 'name' | 'password'>) {
	const exists = await repo.exists({ where: { email: input.email } });
	if (exists) throw new BadRequestError('Email already in use');
	const user = repo.create(input);
	return repo.save(user);
}

export async function login(email: string, password: string) {
	const user = await repo
		.createQueryBuilder('user')
		.addSelect('user.password') // because select: false
		.where('user.email = :email', { email })
		.getOne();

	if (!user) throw new NotFoundError('Invalid credentials');

	const ok = await bcrypt.compare(password, user.password);
	if (!ok) throw new BadRequestError('Invalid credentials');

	return jwt.sign({ sub: user.id, email: user.email }, env.JWT_SECRET, {
		expiresIn: '7d',
	});
}
