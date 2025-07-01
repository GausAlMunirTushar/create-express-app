import fs from 'fs-extra';
import path from 'path';

export async function loadCEAConfig() {
	const configPath = path.resolve(process.cwd(), '.cea-config.json');
	if (!(await fs.pathExists(configPath))) {
		throw new Error('.cea-config.json not found. Run init first.');
	}

	return fs.readJson(configPath);
}
