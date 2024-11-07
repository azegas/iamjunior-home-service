/*

Eslint = Linter

Eslint linter CAN contain stylistic rules, but then it might conflict with Prettier (.prettierrc).

That is why we will use eslint for code quality rules, and Prettier for stylistic rules.

----------------------------------------------------------------

npm init @eslint/config@latest (commonjs, no react, node(not browser))
configure eslint rules (all eslint rules - https://eslint.org/docs/latest/rules/)

Open a FOLDER, not a REPOSITORY in which the .vscode folder is for eslint to work

install ESLint package
then in .vscode/settings.json tell eslint plugin to make changes on save

To run eslint manually - npm run lint
To run prettier manually - npm run format
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
      'no-unused-vars': 'warn',
      'no-unreachable': 'warn',
      complexity: ['warn', 10]
    }
  }
];
