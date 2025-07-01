import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
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

	console.log(chalk.cyan.bold(`\n🚀 Setting up your project...\n`));

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
		// MongoDB selected, default ORM is Mongoose
		database = 'mongodb-mongoose';
	} else if (databaseType === 'SQL') {
		// Step 3: Choose SQL Database
		const { sqlDatabase } = await inquirer.prompt([
			{
				type: 'list',
				name: 'sqlDatabase',
				message: 'Choose an SQL database:',
				choices: ['PostgreSQL', 'MySQL'],
			},
		]);

		// Step 4: Choose ORM
		const { orm } = await inquirer.prompt([
			{
				type: 'list',
				name: 'orm',
				message: 'Choose an ORM:',
				choices: ['Sequelize', 'TypeORM'],
			},
		]);

		database = `${sqlDatabase.toLowerCase()}-${orm.toLowerCase()}`;
	}

	// Determine the correct template folder
	const templateFolder =
		database === 'none'
			? `${language.toLowerCase()}-none` // For No Database, JavaScript or TypeScript
			: `${language.toLowerCase()}-${database}`; // For Database options

	const templateDir = path.join(__dirname, 'templates', templateFolder);

	// Ensure template exists
	if (!fs.existsSync(templateDir)) {
		console.log(
			chalk.red(`❌ Template for ${templateFolder} does not exist.`),
		);
		return;
	}

	try {
		// Copy the selected template
		fs.copySync(templateDir, targetDir);

		// Write dynamic .cea-config.json file
		await createCEAConfig(targetDir, {
			language,
			database,
		});

		console.log(chalk.green(`✅ Project created at ${targetDir}\n`));

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
			console.log(chalk.green('✅ Git repository initialized.\n'));
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
		console.log(chalk.green.bold(`🎉 Project Setup Complete!`));
		console.log(chalk.yellowBright(`\nNext Steps:`));
		console.log(chalk.blue(`➡️ Navigate to your project folder:`));
		console.log(chalk.cyan(`   cd ${isCurrentDir ? '.' : projectName}`));
		console.log(chalk.blue(`📦 Install dependencies:`));
		console.log(chalk.cyan(`   npm install`));
		console.log(chalk.blue(`🚀 Start the development server:`));
		console.log(chalk.cyan(`   npm run dev\n`));
		console.log(chalk.magenta.bold(`Happy Coding! 🚀`));
	} catch (error) {
		console.error(chalk.red('❌ Error copying template files:'), error);
	}
}
