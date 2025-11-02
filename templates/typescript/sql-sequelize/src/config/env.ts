import * as dotenv from 'dotenv';
dotenv.config();

function toBool(v: any) {
	return v === 'true' || v === true;
}

export const env = {
	NODE_ENV: process.env.NODE_ENV!,
	PORT: Number(process.env.PORT!),
	JWT_SECRET: process.env.JWT_SECRET!,

	DB_DIALECT: process.env.DB_DIALECT! as any, // postgres | mysql
	DB_HOST: process.env.DB_HOST!,
	DB_PORT: Number(process.env.DB_PORT!),
	DB_USER: process.env.DB_USER!,
	DB_PASS: process.env.DB_PASS!,
	DB_NAME: process.env.DB_NAME!,
	DB_SSL: toBool(process.env.DB_SSL!),
};
