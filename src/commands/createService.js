import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { loadCEAConfig } from '../utils/configLoader.js';

export async function createService(name) {
	const config = await loadCEAConfig();
	const ext = config.language === 'typescript' ? 'ts' : 'js';
	const filename = `${name}.service.${ext}`;
	const dir = path.resolve(process.cwd(), 'src/services');
	const filePath = path.join(dir, filename);

	await fs.ensureDir(dir);

	const className = name.charAt(0).toUpperCase() + name.slice(1);

	const content =
		config.language === 'typescript'
			? `export class ${className}Service {
  async example() {
    return '${className} service example';
  }
}`
			: `class ${className}Service {
  async example() {
    return '${className} service example';
  }
}

module.exports = new ${className}Service();`;

	await fs.writeFile(filePath, content);
	console.log(chalk.green(`✔ Service created at ${filePath}`));
}
