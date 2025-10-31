// src/config/configCreator.js
import fs from 'fs-extra';
import path from 'path';
import { getOrmName } from '../utils/getOrmName.js';

/**
 * Dynamically create `.cea-config.json` for a generated project
 * @param {string} targetDir - Target project directory
 * @param {object} options - CLI user options (language, database, etc.)
 */
export async function createCEAConfig(targetDir, options) {
	// Detect ORM using helper
	const orm = getOrmName(options.database);

	// Folder structure (standardized)
	const folders = {
		config: 'src/config',
		controllers: 'src/controllers',
		middleware: 'src/middleware',
		models: 'src/models',
		routes: 'src/routes',
		services: 'src/services',
		utils: 'src/utils',
	};

	// Build project metadata
	const ceaConfig = {
		name: path.basename(targetDir),
		language: options.language.toLowerCase(),
		template: `${options.language.toLowerCase()}/${options.database}`,
		database: options.database.startsWith('sql')
			? 'SQL'
			: options.database.startsWith('mongodb')
				? 'MongoDB'
				: 'None',
		orm,
		structure: 'standard',
		includesCommon: true,
		folders,
	};

	// Write .cea-config.json file
	const configPath = path.join(targetDir, '.cea-config.json');
	await fs.writeJson(configPath, ceaConfig, { spaces: 2 });

	console.log('.cea-config.json created successfully.');
}
