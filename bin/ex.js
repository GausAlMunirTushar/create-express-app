#!/usr/bin/env node
import { Command } from 'commander';
import { createController } from '../src/commands/createController.js';
import { createModel } from '../src/commands/createModel.js';
import { createRoute } from '../src/commands/createRoute.js';
import { createMiddleware } from '../src/commands/createMiddleware.js';
import { createAuth } from '../src/commands/createAuth.js';

const program = new Command();

program
	.command('create controller <name>')
	.description('Generate a controller')
	.action(createController);

program
	.command('create model <name>')
	.description('Generate a model based on selected ORM')
	.action(createModel);

program
	.command('create route <name>')
	.description('Generate an Express route file')
	.action(createRoute);

program
	.command('create middleware <name>')
	.description('Generate a middleware')
	.action(createMiddleware);

program
	.command('create auth')
	.description('Generate full auth system (JWT, bcrypt, login/register)')
	.action(createAuth);

program.parse(process.argv);
