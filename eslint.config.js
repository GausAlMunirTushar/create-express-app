import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
	pluginJs.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.node,
				...globals.es2022,
			},
		},
		rules: {
			'no-undef': 'off',
		},
	},
];
