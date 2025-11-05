import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
		plugins: { js },
		extends: ['js/recommended'],
		rules: {
			'prettier/prettier': 'error',
			'no-unused-vars': 'warn',
			'no-console': 'warn',
			'prefer-const': 'error',
		},
	},

	tseslint.configs.recommended,
]);
