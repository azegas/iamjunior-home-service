# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


TODO Responsive design (optional): Naudoti CSS media queries, kad puslapis tinkamai atrodytų įvairaus dydžio įrenginiuose.

TODO pagination padaryk ir pridek 1000 darbu pvz

TODO pasidaryk reusable custom hook - https://github.com/ZilvinasVidmantas/feac6/commit/a2f6dd244497eb038d18f15ca534a4394f2e452d

TODO routes kaip priklauso is pavyzdzio - https://github.com/ZilvinasVidmantas/feac6/commit/f7ca3353629a16a9f5976a1252cc1cc4a23d06f5#diff-c751cd19bab79c757cbf995168c195ac58266bd9ff3b781fb17769a91762c96dR1

TODO entry of the app now is this - http://127.0.0.1:5173/. IF the user does not go there, the fetches will not be made, since they are set to be null in use-fetch hook. So what we need to do is either make an empty list to be in use-fetch hook by default instead of null or somehow, if data is not fetched, fetch it when loading the search results page.



## JSON Server

Install to local project environment, dev dependencies
https://github.com/typicode/json-server
- install json-server - npm install json-server --save-dev
- run json-server --watch data/db.json --port 3001
