/**
 * Detect ORM/ODM name from the selected template path
 * @param {string} database - e.g. "mongodb-mongoose", "sql-prisma"
 * @returns {string} ORM or ODM name
 */
export function getOrmName(database) {
	switch (database) {
		case 'mongodb-mongoose':
			return 'mongoose';
		case 'mongodb-prisma':
		case 'sql-prisma':
			return 'prisma';
		case 'sql-typeorm':
			return 'typeorm';
		case 'sql-sequelize':
			return 'sequelize';
		default:
			return 'none';
	}
}
