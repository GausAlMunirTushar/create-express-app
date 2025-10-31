import { Sequelize } from 'sequelize';

const MONGO_URI = process.env.MONGO_URI;

import {
	DB_DIALECT,
	DB_HOST,
	DB_NAME,
	DB_PASS,
	DB_USER,
} from '../../data/constants/constants.js';
import { models } from '../models/index.js';

/**
 * Connect to MySQL with retry logic
 */
export const db = new Sequelize({
	database: DB_NAME,
	username: DB_USER,
	password: DB_PASS,
	host: DB_HOST,
	dialect: DB_DIALECT,
	logging: false,
	models: models,
});
