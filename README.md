# iamjunior-home-service

Main task that was done during iamjunior course - https://www.iamjunior.lt/front-end-akceleratorius-javascript

Frontend and backend, both have separate READMEs.

## To run the project

```bash
git clone https://github.com/azegas/iamjunior-home-service
# choose a correct branch
cd iamjunior-home-service
```

### Frontend

```bash
cd frontend
npm i
npm run dev
# open http://localhost:5173/ in your browser to preview the site
```

### Backend

```bash
# set the environment variables
cp backend/.env_template backend/.env
cd backend
npm i
npm run server
# open http://localhost:3000/api-docs/ in your browser to preview the swagger docs
# open http://localhost:3000/api/<name_of_endpoint> in your browser to preview the chosen endpoint
```
