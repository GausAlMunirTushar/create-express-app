import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import figlet from 'figlet';
import ora from 'ora';
import { createCEAConfig } from './src/config/configCreator';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function run(projectName) {
	const isCurrentDir = projectName === '.';
	const targetDir = isCurrentDir
		? process.cwd()
		: path.join(process.cwd(), projectName);

	// Check if project folder exists
	if (!isCurrentDir && fs.existsSync(targetDir)) {
		console.log(chalk.red(`Folder "${projectName}" already exists.`));
		return;
	}
	console.clear();
	console.log(
		chalk.magentaBright(
			figlet.textSync('Create Express App', {
				horizontalLayout: 'fitted',
			}),
		),
	);
	console.log(
		chalk.gray('✨ Create Express App • Professional scaffolder ✨'),
	);
	console.log(chalk.gray('-------------------------------------------\n'));

	console.log(chalk.cyan.bold(`\nSetting up your project...\n`));

	// Step 1: Choose Language (JavaScript or TypeScript)
	const { selectedLanguage } = await inquirer.prompt([
		{
			type: 'list',
			name: 'selectedLanguage',
			message: 'Choose the project language:',
			choices: ['JavaScript', 'TypeScript'],
		},
	]);

	let language = selectedLanguage;
	let database = 'none';

	// Step 2: Choose Database Type
	const { databaseType } = await inquirer.prompt([
		{
			type: 'list',
			name: 'databaseType',
			message: 'Choose a database type:',
			choices: ['No Database', 'NoSQL (MongoDB)', 'SQL'],
		},
	]);

	if (databaseType === 'NoSQL (MongoDB)') {
		const { odm } = await inquirer.prompt([
			{
				type: 'list',
				name: 'odm',
				message: 'Choose an ODM for MongoDB:',
				choices: ['Mongoose', 'Prisma'],
				default: 'Mongoose',
			},
		]);

		database = odm.includes('Mongoose')
			? 'mongodb-mongoose'
			: 'mongodb-prisma';
	} else if (databaseType === 'SQL') {
		const { orm } = await inquirer.prompt([
			{
				type: 'list',
				name: 'orm',
				message: 'Choose an ORM:',
				choices: ['Sequelize', 'TypeORM', 'Prisma'],
			},
		]);

		database = `sql-${orm.toLowerCase()}`;
	}
	// Determine the correct template folder path (nested structure)
	const templateDir = path.join(
		__dirname,
		'templates',
		language.toLowerCase(),
		database === 'none' ? 'none' : database,
	);

	console.log(
		chalk.gray(
			`Using template: templates/${language.toLowerCase()}/${database}`,
		),
	);

	// Ensure template exists
	if (!fs.existsSync(templateDir)) {
		console.log(
			chalk.red(`Template for ${language}/${database} does not exist.`),
		);
		return;
	}

	try {
		// Copy the selected template
		const copySpinner = ora('Copying template files...').start();
		try {
			fs.copySync(templateDir, targetDir);
			copySpinner.succeed('Template files copied successfully.');
		} catch (err) {
			copySpinner.fail('Failed to copy template files.');
			throw err;
		}

		// Write dynamic .cea-config.json file
		await createCEAConfig(targetDir, {
			language,
			database,
		});
		const envExample = path.join(targetDir, '.env.example');
		const envFile = path.join(targetDir, '.env');
		if (fs.existsSync(envExample) && !fs.existsSync(envFile)) {
			fs.copySync(envExample, envFile);
			console.log(chalk.green('.env file created from example.'));
		}
		if (database.includes('prisma')) {
			const prismaSpinner = ora('Generating Prisma client...').start();
			try {
				execSync('npx prisma generate', {
					cwd: targetDir,
					stdio: 'inherit',
				});
				prismaSpinner.succeed('Prisma client generated successfully.');
			} catch {
				prismaSpinner.fail('Failed to generate Prisma client.');
			}
		}

		console.log(chalk.green(`Project created at ${targetDir}\n`));

		// Step 5: Initialize Git
		const { initGit } = await inquirer.prompt([
			{
				type: 'confirm',
				name: 'initGit',
				message: 'Initialize a Git repository?',
				default: true,
			},
		]);

		if (initGit) {
			execSync('git init', { cwd: targetDir, stdio: 'inherit' });
			console.log(chalk.green('Git repository initialized.\n'));
		}
		// Step 6: Add .gitignore if it doesn't exist
		const gitignorePath = path.join(targetDir, '.gitignore');
		if (!fs.existsSync(gitignorePath)) {
			// Content to add to the .gitignore file
			const gitignoreContent = `
# Node modules
node_modules/
				
# Logs
logs/
*.log
npm-debug.log*
				
# .env files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
				
# OS files
.DS_Store
Thumbs.db `;

			fs.writeFileSync(gitignorePath, gitignoreContent.trim());
		}

		// Display next steps
		console.log(chalk.green.bold(`Project Setup Complete!`));
		console.log(chalk.yellowBright(`\nNext Steps:`));
		console.log(chalk.blue(`Navigate to your project folder:`));
		console.log(chalk.cyan(`   cd ${isCurrentDir ? '.' : projectName}`));
		console.log(chalk.blue(`Install dependencies:`));
		console.log(chalk.cyan(`   npm install`));
		console.log(chalk.blue(`Start the development server:`));
		console.log(chalk.cyan(`   npm run dev\n`));
		console.log(chalk.magenta.bold(`Happy Coding! 🚀`));
		// Summary Table
		console.table({
			Language: language,
			Database: databaseType,
			ORM: database.split('-')[1]
				? database.split('-')[1].charAt(0).toUpperCase() +
					database.split('-')[1].slice(1)
				: 'None',
			Path: targetDir,
		});
	} catch (error) {
		console.error(chalk.red(' Error copying template files:'), error);
	}
}
