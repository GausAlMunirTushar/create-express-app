import fs from 'fs-extra';
import path from 'path';
import { loadCEAConfig } from '../utils/configLoader.js';
import chalk from 'chalk';

export async function createRoute(name) {
	const config = await loadCEAConfig();
	const ext = config.language === 'typescript' ? 'ts' : 'js';
	const filename = `${name}.routes.${ext}`;
	const dir = path.resolve(process.cwd(), config.folders.routes);
	const filePath = path.join(dir, filename);
	await fs.ensureDir(dir);

	const importController =
		config.language === 'typescript'
			? `import { ${name.charAt(0).toUpperCase() + name.slice(1)}Controller } from '../controllers/${name}.controller';`
			: `const ${name}Controller = require('../controllers/${name}.controller');`;

	const content =
		config.language === 'typescript'
			? `${importController}
import { Router } from 'express';

const router = Router();

router.get('/', new ${name.charAt(0).toUpperCase() + name.slice(1)}Controller().index);

export default router;`
			: `${importController}
const express = require('express');
const router = express.Router();

router.get('/', ${name}Controller.index);

module.exports = router;`;

	await fs.writeFile(filePath, content);
	console.log(chalk.green(`✔ Route created at ${filePath}`));
}
