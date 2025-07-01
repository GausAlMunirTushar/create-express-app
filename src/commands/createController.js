import fs from 'fs-extra';
import path from 'path';
import { loadCEAConfig } from '../utils/configLoader.js';
import chalk from 'chalk';

export async function createController(name) {
	const config = await loadCEAConfig();
	const ext = config.language === 'typescript' ? 'ts' : 'js';
	const filename = `${name}.controller.${ext}`;
	const dir = path.resolve(process.cwd(), config.folders.controllers);
	const filePath = path.join(dir, filename);

	await fs.ensureDir(dir);
	const className = name.charAt(0).toUpperCase() + name.slice(1);

	const content =
		config.language === 'typescript'
			? `export class ${className}Controller {
  async index(req: Request, res: Response) {
    res.send('${name} controller');
  }
}
`
			: `class ${className}Controller {
  async index(req, res) {
    res.send('${name} controller');
  }
}

module.exports = new ${className}Controller();
`;

	await fs.writeFile(filePath, content);
	console.log(chalk.green(`✔ Controller created at ${filePath}`));
}
