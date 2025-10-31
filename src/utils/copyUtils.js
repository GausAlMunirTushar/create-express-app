import fs from 'fs-extra';
import path from 'path';
import ora from 'ora';
import chalk from 'chalk';

/**
 * Copy common base files into target directory.
 * @param {string} baseDir - CLI root (__dirname from index)
 * @param {string} targetDir - Destination project folder
 * @param {object} options - { overwrite: boolean }
 */
export function copyCommonFiles(
	baseDir,
	targetDir,
	options = { overwrite: true },
) {
	const commonDir = path.join(baseDir, 'templates', '_common');
	if (!fs.existsSync(commonDir)) return;

	const spinner = ora('Adding shared _common files...').start();
	try {
		fs.copySync(commonDir, targetDir, {
			overwrite: !!options.overwrite,
			errorOnExist: false,
		});
		spinner.succeed(chalk.green('Common files added.'));
	} catch (err) {
		spinner.fail(chalk.red('Failed to add common files.'));
		throw err;
	}
}
