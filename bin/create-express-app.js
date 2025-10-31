#!/usr/bin/env node

import { Command } from 'commander';
import { run } from '../index.js';

const program = new Command();

program
	.name('create-ex-app')
	.description('Generate Express.js apps in JavaScript or TypeScript')
	.version('1.0.1');

program
	.argument('[name]', "Project name or '.' for current directory", 'my-app')
	.action(async (name) => {
		await run(name);
	});

program.parse(process.argv);
