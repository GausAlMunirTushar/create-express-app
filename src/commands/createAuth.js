import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { loadCEAConfig } from '../utils/configLoader.js';

export async function createAuth() {
	const config = await loadCEAConfig();
	const ext = config.language === 'typescript' ? 'ts' : 'js';

	const files = [
		['controllers', `auth.controller.${ext}`, '// TODO: Auth controller'],
		['routes', `auth.routes.${ext}`, '// TODO: Auth routes'],
		['services', `auth.service.${ext}`, '// TODO: Auth service'],
		['middlewares', `auth.middleware.${ext}`, '// TODO: Auth middleware'],
	];

	for (const [folderKey, file, content] of files) {
		const baseDir =
			folderKey === 'middlewares'
				? path.resolve(process.cwd(), 'src', folderKey)
				: path.resolve(process.cwd(), config.folders[folderKey]);
		await fs.ensureDir(baseDir);
		const filePath = path.join(baseDir, file);
		await fs.writeFile(filePath, content);
	}

	console.log(
		chalk.green('✔ Auth module scaffolded into respective folders'),
	);
}
