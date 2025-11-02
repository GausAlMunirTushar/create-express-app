import { Sequelize } from 'sequelize-typescript';
import { env } from './env';
import { User } from '@/models/user.model';

export const sequelize = new Sequelize({
	dialect: env.DB_DIALECT,
	host: env.DB_HOST,
	port: env.DB_PORT,
	username: env.DB_USER,
	password: env.DB_PASS,
	database: env.DB_NAME,
	models: [User],
	logging: env.NODE_ENV !== 'production' ? console.log : false,
	dialectOptions: env.DB_SSL ? { ssl: { rejectUnauthorized: false } } : {},
});

export async function connectDB() {
	try {
		await sequelize.authenticate();
		console.log('Database connected successfully');
		await sequelize.sync({ alter: false }); // never use { force: true } in production
	} catch (err) {
		console.error('Database connection failed:', err);
		process.exit(1);
	}
}
