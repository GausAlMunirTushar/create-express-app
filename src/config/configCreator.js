import fs from 'fs-extra';
import path from 'path';

/**
 * Write .cea-config.json dynamically based on user options.
 * @param {string} targetDir - The root directory of the created project
 * @param {object} options - User options: language, database, optional folders
 */
export async function createCEAConfig(targetDir, options) {
	let orm = 'none';
	if (options.database === 'mongodb-mongoose') orm = 'mongoose';
	else if (options.database.includes('sequelize')) orm = 'sequelize';
	else if (options.database.includes('typeorm')) orm = 'typeorm';

	const folders = options.folders || {
		controllers: 'src/controllers',
		models: 'src/models',
		routes: 'src/routes',
	};

	const ceaConfig = {
		language: options.language.toLowerCase(),
		orm,
		folders,
	};

	const configPath = path.join(targetDir, '.cea-config.json');
	await fs.writeJson(configPath, ceaConfig, { spaces: 2 });
}
