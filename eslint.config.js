import globals from 'globals';
import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    plugins: {
      '@stylistic': stylistic,
    },
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
      },
      globals: { ...globals.browser, ...globals.node, ...globals.jest },
    },
    rules: {
      '@stylistic/indent': ['error', 2, { SwitchCase: 1 }],
      '@stylistic/semi': ['error', 'always'],
    },
  },
  pluginJs.configs.recommended,
];

export default config;
