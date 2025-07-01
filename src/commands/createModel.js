import fs from 'fs-extra';
import path from 'path';
import { loadCEAConfig } from '../utils/configLoader.js';
import chalk from 'chalk';

export async function createModel(name) {
	const config = await loadCEAConfig();
	const ext = config.language === 'typescript' ? 'ts' : 'js';
	const filename = `${name}.model.${ext}`;
	const dir = path.resolve(process.cwd(), config.folders.models);
	const filePath = path.join(dir, filename);
	await fs.ensureDir(dir);

	const content =
		config.orm === 'mongoose'
			? ext === 'ts'
				? `import { Schema, model } from 'mongoose';

const ${name}Schema = new Schema({
  // define fields here
});

export const ${name.charAt(0).toUpperCase() + name.slice(1)} = model('${name}', ${name}Schema);`
				: `const mongoose = require('mongoose');

const ${name}Schema = new mongoose.Schema({
  // define fields here
});

module.exports = mongoose.model('${name}', ${name}Schema);`
			: '// Add support for other ORMs here';

	await fs.writeFile(filePath, content);
	console.log(chalk.green(`✔ Model created at ${filePath}`));
}
