import { db } from '../config/database';
import { DataTypes } from 'sequelize';

const User = db.define(
	'user',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
	},
	{
		freezeTableName: true,
		timestamps: true,
	},
);

export { User };
