- [About the project](#about-the-project)
- [Live site](#live-site)
- [Run project](#run-project)
  - [Clone the project](#clone-the-project)
  - [Run backend](#run-backend)
  - [Run frontend](#run-frontend)
- [Guides](#guides)
  - [Setup database](#setup-database)
  - [Setup linting/formatting](#setup-lintingformatting)
    - [Linting](#linting)
    - [Formatting](#formatting)
  - [Setup deployment](#setup-deployment)
    - [Deploy backend (Node/Express)](#deploy-backend-nodeexpress)
    - [Deploy frontend (Vite/React)](#deploy-frontend-vitereact)
    - [CORS](#cors)
- [iamjunior-home-service Task overview](#iamjunior-home-service-task-overview)
  - [DONE BONUS features](#done-bonus-features)
  - [TODO BONUS features](#todo-bonus-features)
- [Actual project requirements](#actual-project-requirements)
  - [React](#react)
    - [React ekosistema, JSX sintaksė ir state valdymas](#react-ekosistema-jsx-sintaksė-ir-state-valdymas)
    - [Komponento gyvavimo ciklai ir react-router-dom](#komponento-gyvavimo-ciklai-ir-react-router-dom)
    - [Custom Hooks](#custom-hooks)
    - [React Context ir zustand](#react-context-ir-zustand)
  - [Node.js](#nodejs)
    - [Node.js ir Express pagrindai](#nodejs-ir-express-pagrindai)
      - [Duomenų Modeliai:](#duomenų-modeliai)
      - [API kuriuos reikia įgyvendinti:](#api-kuriuos-reikia-įgyvendinti)
        - [1. Kategorijos](#1-kategorijos)
        - [2. Įmonės](#2-įmonės)
        - [3. Užsakymai](#3-užsakymai)
        - [Papildomos funkcijos, kurias reikia įgyvendinti:](#papildomos-funkcijos-kurias-reikia-įgyvendinti)
    - [MongoDB ir Mongoose](#mongodb-ir-mongoose)
    - [Autentifikacija Node.js](#autentifikacija-nodejs)
    - [ESlint ir Prettier](#eslint-ir-prettier)
  - [Typescript](#typescript)
    - [Typescript basics](#typescript-basics)
    - [Frontend + Backend](#frontend--backend)
    - [Formik + Yup](#formik--yup)
    - [Formik \& Yup](#formik--yup-1)
    - [React-query](#react-query)
    - [Praktika 2 paskaitas](#praktika-2-paskaitas)
  - [Test](#test)
  - [Deploy](#deploy)

# About the project

https://www.iamjunior.lt/front-end-akceleratorius-javascript course task.

Frontend and backend, both have separate READMEs with more info about what has to be done.

# Live site

Frontend - https://frontend-one-mu-96.vercel.app/

Backend - https://backend-eta-sable-64.vercel.app/

# Run project

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
npm run dev
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
npm run client
# open http://localhost:5173/ in your browser to preview the site
```

# Guides

## Setup database

MongoDB is used for the database - https://www.mongodb.com/

Register/login, etc.

Create a new project, choose a free tier.

Create a cluster.

Take the connection string, it will look something like this:

```
mongodb+srv://<username>:<password>@<cluster-address>/<dbname>?retryWrites=true&w=majority
```

Add the connection string to the `.env` file in the `backend` folder. Use .env_template as a template.

Create a DB connecting function, use it when server is starting.

Then create models, whenever (tables in the db will be created automatically when you connect to the db).

Then when you are saving data, use the models to write/edit/delete entries to the db.

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

```bash
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

## Setup deployment

Install vercel GLOBALLY:

```bash
npm i -g vercel
vercel login
```

### Deploy backend (Node/Express)

You will notice that we don't need to "build" the backend.

Environment variables can be used in the backend code, they don't need to have any prefix, can be reached with `process.env.VARIABLE_NAME`.

Make sure you are in the main/master branch.

```bash
cd backend
```

Make sure to have:

```js
...
import path from "path";

const app = express();
app.use(express.static(path.join(__dirname, "../", "public")));
```

Also have `index.html` file in the public folder.

Create `backend/vercel.json`:

For a JavaScript project:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node",
      "config": { "includeFiles": ["./**"] }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```

For a TypeScript project:

Vercel can not deploy our TypeScript files, it has to deploy `.js` files. For that we
first transpile the TypeScript files to `.js` files with the `tsc` command. during build process `package.json`. It generates the `dist` folder with all the `.js` files and this folder can be deployed.

A hack was also made for swagger-ui-express to work with Vercel by including the `node_modules/swagger-ui-dist` folder in the build process (otherwise we would get "uncaught ReferenceError: SwaggerBundle is not defined" error). I feel like this is a workaround, not a solution. Good enoguh for my case now, but should be investigated more in the future. Now we just found what swagger needs and provided it to it to work. This was not needed for JavaScript project as you can see in the `vercel.json` example above.

```json
{
  "version": 2,
  "builds": [
    {
      "src": "dist/server.js",
      "use": "@vercel/node",
      "config": {
        "includeFiles": ["./dist/**", "./node_modules/swagger-ui-dist/**"]
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "dist/server.js"
    }
  ]
}
```

`package.json` add deploy commands:

```json
"scripts": {
    "deploy": "vercel --prod"
}
```

TODO write docs about vercel deployment (after ts conversion)

Vercel most likely automatically sets this variables - NODE_ENV to be "production" when we are deploying. SOOOOOOO, we can use it and make some conditional logic in the code. Find all the `process.env.NODE_ENV === 'production'` to see what we change to run in production and locally.

```bash
cd backend
vercel login
npm run deploy
```

### Deploy frontend (Vite/React)

You will notice that we need to "build" the frontend.

Environment variables can be used in the frontend code, but they need to be prefixed with `VITE_`, can be reached with `import.meta.env.VITE_VARIABLE_NAME`.

Make sure you are in the main/master branch.

```bash
cd frontend
vercel login
vercel
```

Make sure all the `http://localhost:3000/api/...` endpoints are changed to use backend vercel url. Don't place it directly in the code, but in `.env` file instead. The trick is to use `import.meta.env.VITE_SERVER_URL_PROD` in the frontend code instead of `process.env.SERVER_URL`.

> import.meta.env: In Vite, you use import.meta.env to access environment variables instead of process.env.
>
> Prefix with VITE*: Vite requires all environment variables to be prefixed with VITE* to expose them in the client code.

Package.json add deploy commands:

```json
"scripts": {
    "deploy": "npm run build && vercel --prod"
}
```

Create `frontend/vercel.json`:

When deploying to production with `npm run deploy`, the `VITE_PROD` environment variable will always be forced to be `true` (as a consequence backend server will be used instead of localhost). Locally we can set it to `false` by changing the value in `.env` file.

```json
{
  "build": {
    "env": {
      "VITE_PROD": "true"
    }
  }
}
```

Deploy frontend:

```bash
cd frontend
vercel login
npm run deploy
```

### CORS

Add frontend url to backend cors config.

Redeploy backend.

Database server is open to all ips (0.0.0.0/0) - configured on mongo atlas side.

Backend server is open to - ?????????

Frontend server is open to - ?????????

- [About the project](#about-the-project)
- [Live site](#live-site)
- [Run project](#run-project)
  - [Clone the project](#clone-the-project)
  - [Run backend](#run-backend)
  - [Run frontend](#run-frontend)
- [Guides](#guides)
  - [Setup database](#setup-database)
  - [Setup linting/formatting](#setup-lintingformatting)
    - [Linting](#linting)
    - [Formatting](#formatting)
  - [Setup deployment](#setup-deployment)
    - [Deploy backend (Node/Express)](#deploy-backend-nodeexpress)
    - [Deploy frontend (Vite/React)](#deploy-frontend-vitereact)
    - [CORS](#cors)
- [iamjunior-home-service Task overview](#iamjunior-home-service-task-overview)
  - [DONE BONUS features](#done-bonus-features)
  - [TODO BONUS features](#todo-bonus-features)
- [Actual project requirements](#actual-project-requirements)
  - [React](#react)
    - [React ekosistema, JSX sintaksė ir state valdymas](#react-ekosistema-jsx-sintaksė-ir-state-valdymas)
    - [Komponento gyvavimo ciklai ir react-router-dom](#komponento-gyvavimo-ciklai-ir-react-router-dom)
    - [Custom Hooks](#custom-hooks)
    - [React Context ir zustand](#react-context-ir-zustand)
  - [Node.js](#nodejs)
    - [Node.js ir Express pagrindai](#nodejs-ir-express-pagrindai)
      - [Duomenų Modeliai:](#duomenų-modeliai)
      - [API kuriuos reikia įgyvendinti:](#api-kuriuos-reikia-įgyvendinti)
        - [1. Kategorijos](#1-kategorijos)
        - [2. Įmonės](#2-įmonės)
        - [3. Užsakymai](#3-užsakymai)
        - [Papildomos funkcijos, kurias reikia įgyvendinti:](#papildomos-funkcijos-kurias-reikia-įgyvendinti)
    - [MongoDB ir Mongoose](#mongodb-ir-mongoose)
    - [Autentifikacija Node.js](#autentifikacija-nodejs)
    - [ESlint ir Prettier](#eslint-ir-prettier)
  - [Typescript](#typescript)
    - [Typescript basics](#typescript-basics)
    - [Frontend + Backend](#frontend--backend)
    - [Formik + Yup](#formik--yup)
    - [Formik \& Yup](#formik--yup-1)
    - [React-query](#react-query)
    - [Praktika 2 paskaitas](#praktika-2-paskaitas)
  - [Test](#test)
  - [Deploy](#deploy)

# iamjunior-home-service Task overview

First I write **bonus** features that I have done besides the actual project requirements.

Actual project requirements are written below with indications what is done and what is not.

## DONE BONUS features

- [x] Mimicking loading functionality - fetching what is "static" quickly, fetching businesses with setTimeout to imitate loading, so the user is aware, that he will get some information soon. Not having a long initial loading screen.
- [x] json server to to mimic and provide fake data
- [x] active class both in menu and in service search
- [x] loading effect faked in useFetch hook by adding setTimeout
- [x] catch error in useFetch hook and display it in the component
- [x] go to individual business pages
- [x] 404 page
- [x] favicon
- [x] deployed to vercel
- [x] toast notifications
- [x] user dashboard
- [x] Allow user to add favorites only if they are logged in
- [x] Navigation menu displays favorites only if the user is logged in
- [x] login/logout/register info messages
- [x] If no favorites in the favorites page, display a message and a button to go back to the main page to add some
- [x] Swagger API docs - https://www.youtube.com/watch?v=eiSem0cqaN0&ab_channel=KrisFoster
- [x] Automatically recreate database data from scratch
- [x] Bookings functionality
- [x] Delete endpoints
- [x] absolute paths instead of ../../
- [x] Functional search in homepage

## TODO BONUS features

- [ ] pagination (100 businesses)
- [ ] dark mode - https://usehooks-ts.com/react-hook/use-dark-mode
- [ ] make favorites to be stored in the db(different for each user), not in local storage
- [ ] fetch images from aws s3 bucket or similar
- [ ] dark mode toggle
- [ ] when clicking book now (in business list view, individual card) - leads to individual page with booking panel already opened

# Actual project requirements

## React

### React ekosistema, JSX sintaksė ir state valdymas

1. [x] Topbar komponentas: Tai turėtų apimti logotipą ir navigacijos meniu, kuris kol kas gali būti statinis vėliau bus įtrauktas react-router.
2. [x] Paieškos juosta: Centrinė paieškos juosta su mygtuku. Nors interaktyvi paieška dar nebus įgyvendinta, svarbu paruošti input elementą ir paieškos mygtuką.
3. [x] Kategorijos kortelė: Paslaugų sekcijoje, kiekviena paslauga (pvz., “Cleaning”, “Repair”) turėtų būti atvaizduojama kaip atskiras komponentas su ikona ir tekstiniu aprašymu.
4. [x] Stilius: SCSS modules arba Styled-components
5. [ ] Responsive design (optional): Naudoti CSS media queries, kad puslapis tinkamai atrodytų įvairaus dydžio įrenginiuose. (did not want to focus on styling for now, was focusing on react and node more)
6. [x] Būsenos valdymas: Nors šioje užduotyje būsenos valdymo galimybių nebus daug, verta paruošti būsimam funkcionalumui su useState. Galima paruošti search inputui.

### Komponento gyvavimo ciklai ir react-router-dom

1. [x] Topbar komponentas: Įgyvendinti navigaciją react-router-dom pagalba tarp puslapių Home, Services ir About Us. Naudoti Link komponentą
2. [x] Login mygtukas: Paspaudus Login/Sign Up mygtuką naviguoti į Login puslapį naudojant useNavigate hooką
3. [x] Paslaugų kortelė: Paspaudus ant kortelės naviguoti į /search/:category routą
4. [x] Routes: Įgyivendinti naujus maršrutus (routes) tokius kaip: Home, Services, About Us, Login, Register, SearchCategory

### Custom Hooks

1. [x] Categories komponentas: Įgyvendinti kategorijų pasirinkimą. Paspaudus ant kitos kategorijos turi pasikeisti ir URL iš /search/cleaning į /search/repair
2. [x] Filtravimas: Išfiltruoti tik tas paslaugas kurios įeina į kategoriją
3. [x] Save as favorite (optional): Pridėti ant kortelės širdelės arba žymos ikoną, kurią nuspaudus būtų išsaugotą paslauga į localStorage. Galite naudoti useLocalStorage hooksą.

### React Context ir zustand

1. [x] Login: Sukurti /login route, įgyvendinti savo norimą dizainą ir pridėti inputų validaciją.
2. [x] Redirect: Suvedus inputus ir paspaudus Login mygtuką išsaugoti userio informaciją su useContext ir localStorage bei redirectint į pagrindinį / route
3. [x] Topbar komponentas: Atnaujinti komponento state kai asmuo yra prisijungęs
4. [x] Register (optional): Įgyvendinti /register route ir savo norimą dizainą

## Node.js

### Node.js ir Express pagrindai

Home service aplikacijos API. Sukurti RESTful API naudojant Express.js, skirtą valdyti kategorijas, įmones ir užsakymus.

#### Duomenų Modeliai:

- [x] Kategorijos: Kiekviena kategorija turi ID, pavadinimą, fono spalvą ir ikonos URL.
- [x] Įmonės: Kiekvienas įmonės įrašas apima tokius duomenis kaip ID, pavadinimas, aprašymas, adresas, kategorija, kontaktinis asmuo, el. paštas ir nuotraukos.
- [x] Užsakymai: Sekami užsakymai su tokiomis detalėmis kaip ID, įmonės ID, data, laikas, vartotojo el. paštas, vartotojo vardas ir statusas.

#### API kuriuos reikia įgyvendinti:

##### 1. Kategorijos

- [x] GET /categories: Gauna visas kategorijas.
- [x] POST /categories: Sukuria naują kategoriją.

##### 2. Įmonės

- [x] GET /businesses: Gauna visas įmones.
- [x] GET /businesses/category/:category: Gauna visas įmones, priklausančias nurodytai kategorijai.
- [x] GET /businesses/:id: Gauna konkrečią įmonę pagal ID.
- [x] POST /businesses: Prideda naują įmonę į sąrašą. Užtikrinti, kad būtų pateikti visi būtini laukai.
- [x] PUT /businesses/:id: Atnaujina esamą įmonę. Patikrinti, ar įmonė su nurodytu ID egzistuoja, prieš atnaujinant.
- [x] GET /businesses/:businessId/bookings/date/:date: Gauna visus užsakymus konkrečiai įmonei nurodytą dieną.

##### 3. Užsakymai

- [x] GET /bookings/user/:email: Gauna visus užsakymus, susijusius su konkretaus vartotojo el. pašto adresu.
- [x] POST /bookings: Sukuria naują užsakymą. Užtikrinti, kad būtų pateikti visi laukai.
- [x] DELETE /bookings/:id: Ištrina konkretų užsakymą.

##### Papildomos funkcijos, kurias reikia įgyvendinti:

- [x] Error handling: Įgyvendinti išsamią klaidų tvarkymo sistemą, kad būtų aiškiai pateikiami pranešimai apie trūkstamus duomenis, netinkamas operacijas ir nesėkmingus veiksmus.
- [x] Data check: Užtikrinti, kad visi įvesties duomenys atitiktų tikėtinus formatus ir apribojimus prieš juos apdorojant.

### MongoDB ir Mongoose

- [x] Panaudoti 5 paskaitos kurtus API ir perdaryti juos naudojant MongoDB ir mongoose

### Autentifikacija Node.js

- [x] Pridėti User schemą su atitinkamais laukais
- [x] Panaudoti autentifikacijos metodus ir apsaugoti reikiamus API
- [x] Išskaidyti routes į skirtingus failus pvz. routes/bookingRoutes.js, routes/businessRoutes.js, routes/authRoutes.js

### ESlint ir Prettier

- [x] Integruoti ESlint ir atitikti visus ESlint reikalavimus
- [x] Integruoti Prettier ir suformatuoti visus failus

## Typescript

### Typescript basics

- [x] Integruoti Typescript palaikymą
- [x] Refactorinti visą kodą iš Javascript į Typescript

### Frontend + Backend

- [x] Pridėti kategorijas ir įmones į duomenų bazę
- [x] Sukurta front-end aplikacija
- [x] Sukurta prisijungimo ir registracijos forma
- [x] Sujungti /categories ir /businesses API su front-end aplikacija
- [x] Sujungti /login ir /register API su prisijungimo ir registracijos formomis.(Įgyvendinti registracijos formą, jeigu nėra)
- [x] (Optional) Pridėti error ir sucess messages. Pvz. kai įvesti netinkami duomenys

### Formik + Yup

### Formik & Yup

1. [x] Integruoti Formik ir yup bibliotekas į React aplikaciją
   1. [x] Login forma
   2. [x] Register forma
2. [x] Naudokite tipus kiekviename komponente: Naudokite TypeScript tipus visur, kur įmanoma, kad užtikrintumėte saugumą ir pagerintumėte kodo kokybę.
3. [x] Klaidos pranešimai: Visada parodykite klaidos pranešimus šalia laukelių, kad vartotojai žinotų, kas negerai.
4. [x] Naudokite Yup validaciją: Yup yra galinga biblioteka, kuri leidžia lengvai kurti sudėtingas validacijos taisykles.
5. [x] Automatinis laukų tikrinimas: Naudokite touched savybę iš Formik, kad parodytumėte klaidas tik tiems laukams, kurie buvo paliesti (paspausti). Field tai daro automatiškai.
6. [x] Kintamųjų laikymas: Laikykite initialValues ir validationSchema ne renderio viduje. Galite laikyti virš komponento arba geriausia iškelti į atskirą failą.
7. [x] Pavadinimai: Kuriant didelę aplikaciją naudoti papildomus žodžius kintamiesmams pvz.: komponentas LoginForm.tsx, tipai LoginFormValues, pradinės reikšmės const loginInitialValues: LoginFormValues = {...}, schema const loginValidationSchema: Yup.Schema<LoginFormValues> = Yup.object({...})
8. [x] Pernaudojamumas: Išsikelti dažniausiai naudojamus error žinutes į atskirą kintamąjį pvz.: const errorMessage = { required: "Laukas privalomas"}

### React-query

- [x] Integruoti React-query biblioteką į React aplikaciją

### Praktika 2 paskaitas

- [x] Padaryti dinaminį route vieno business page
- [x] Dropdown menu paspaudus ant Avatar
- [x] Sidebar modal form atidarymas nuspaudus "Book Appointment" mygtuką
- [x] Atidaryti Mano užsakymai route pasirinkus "My booking" opciją iš dropdown menu

## Test

- [x] Integruoti Jest ir React Testing Library bibliotekas į React aplikaciją
- [ ] Parašyti testus kurie padengtų bent 50% code coverage (did a few tests for practice)

## Deploy

- [x] Deployinti front-end į Vercel
