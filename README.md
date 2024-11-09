- [iamjunior-home-service](#iamjunior-home-service)
  - [Clone the project](#clone-the-project)
  - [Run backend](#run-backend)
  - [Run frontend](#run-frontend)
  - [Setup linting/formatting](#setup-lintingformatting)
    - [Linting](#linting)
    - [Formatting](#formatting)

# iamjunior-home-service

Main task that was done during iamjunior course - https://www.iamjunior.lt/front-end-akceleratorius-javascript

Frontend and backend, both have separate READMEs.

## Clone the project

```bash
git clone https://github.com/azegas/iamjunior-home-service
# choose a correct branch
cd iamjunior-home-service
```

## Run backend

To start the API server, run the following commands:

```bash
cd backend
# set the environment variables to .env file
cp .env_template .env
npm i
npm run server
```

When site has been launched:

- Index page - http://localhost:3000/
- Swagger API docs - http://localhost:3000/api-docs/
- To preview the chosen endpoint - http://localhost:3000/api/categories (or other endpoint)

Database is in MongoDB over at - https://www.mongodb.com (accessed from all ips (0.0.0.0/0) - configured on mongo atlas side)

To recreate the database, run the following command:

```bash
cd utils
node recreate-db.js
```

## Run frontend

```bash
# make sure backend server is running first
cd frontend
npm i
npm run dev
# open http://localhost:5173/ in your browser to preview the site
```

## Setup linting/formatting

This step is totally optional, but recommended for development experience.

Both frontend and backend folders have their own linting/formatting rules, separate configuration files also.

`Eslint` linter **CAN** contain stylistic rules, but then it might conflict with `Prettier` (.prettierrc).

That is why we will use eslint for code **quality rules**, and Prettier for **stylistic** rules.

### Linting

Install needed dependencies (frontend/backend):

```bash
# Linting for backend
cd backend
# choose (commonjs, no react, node(not browser))
npm init @eslint/config@latest


# Linting for frontend
cd frontend
# choose (commonjs, react, browser)
npm init @eslint/config@latest
```

Install needed extensions:

```
Name: ESLint
Id: dbaeumer.vscode-eslint
Description: Integrates ESLint JavaScript into VS Code.
Version: 3.0.10
Publisher: dbaeumer
VS Marketplace Link: https://marketplace.cursorapi.com/items?itemName=dbaeumer.vscode-eslint
```

Setup needed files (frontend/backend):

`.eslint.config` or something similar file should be setup already in your chosen folder by the previous command. One for frontend and one for backend.

```json
# example rules:

rules: {
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'no-console': 'error'
    }
```

configure eslint rules (all eslint rules - https://eslint.org/docs/latest/rules/)

Setup package.json (frontend/backend):

```json
"scripts": {
    "lint": "eslint ."
}
```

Setup `user settings JSON` in vscode:

```json
"editor.codeActionsOnSave": {
  "source.fixAll": "explicit"
}
```

Run lint manually for all the files in the folder (frontend/backend):

```bash
npm run lint
```

### Formatting

`Prettier` is used for formatting().

Prettier already contains some rules, but we can add more/override existing ones by creating a configurations file. More about it later.

Install needed dependencies (frontend/backend):

```bash
npm install --save-dev prettier
```

Install needed extensions:

```
Name: Prettier - Code formatter
Id: esbenp.prettier-vscode
Description: Code formatter using prettier
Version: 11.0.0
Publisher: esbenp
VS Marketplace Link: https://marketplace.cursorapi.com/items?itemName=esbenp.prettier-vscode
```

Setup needed files (frontend/backend):

`.prettierrc` or something similar file should be setup already in your chosen folder by the previous command. One for frontend and one for backend.

Example `.prettierrc` file (try not to add rules you dont understand):

```json
{
  "singleQuote": true
}
```

Setup `user settings JSON` in vscode:

```json
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
```

Setup package.json (frontend/backend):

```json
"scripts": {
    "format": "prettier --write ."
}
```

Run formatting manually for all the files in the folder (frontend/backend):

```bash
npm run format
```
