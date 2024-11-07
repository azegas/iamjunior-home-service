/*
npm init @eslint/config@latest (commonjs, no react, node(not browser))
configure eslint rules (all eslint rules - https://eslint.org/docs/latest/rules/)

Open a FOLDER, not a REPOSITORY in which the .vscode folder is for eslint to work

install ESLint package
then in .vscode/settings.json tell eslint plugin to make changes on save
*/

import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    rules: {
      'no-console': 'warn',
      complexity: ['warn', 10],
      quotes: ['warn', 'single'],
      'eol-last': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-trailing-spaces': ['error', { skipBlankLines: true }]
    }
  }
];
