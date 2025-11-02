import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { env } from './env';
import { User } from '@/entities/User';

export const AppDataSource = new DataSource({
	type: env.DB_TYPE,
	host: env.DB_HOST,
	port: Number(env.DB_PORT),
	username: env.DB_USER,
	password: env.DB_PASS,
	database: env.DB_NAME,
	ssl: env.DB_SSL ? { rejectUnauthorized: false } : false,
	entities: [User],
	migrations: ['src/migrations/*.ts'],
	synchronize: false, //
	logging: env.NODE_ENV !== 'production',
});
