import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { loadCEAConfig } from '../utils/configLoader.js';

export async function createMiddleware(name) {
	const config = await loadCEAConfig();
	const ext = config.language === 'typescript' ? 'ts' : 'js';
	const filename = `${name}.middleware.${ext}`;
	const dir = path.resolve(process.cwd(), 'src/middlewares');
	const filePath = path.join(dir, filename);

	await fs.ensureDir(dir);

	const content =
		config.language === 'typescript'
			? `import { Request, Response, NextFunction } from 'express';

export function ${name}(req: Request, res: Response, next: NextFunction) {
  console.log('${name} middleware');
  next();
}`
			: `module.exports = function ${name}(req, res, next) {
  console.log('${name} middleware');
  next();
};`;

	await fs.writeFile(filePath, content);
	console.log(chalk.green(`✔ Middleware created at ${filePath}`));
}
