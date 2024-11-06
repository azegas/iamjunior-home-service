const express = require("express");
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();
const app = express();
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const mongoose = require('mongoose');

// ----------------------------------------------------------------
// SWAGGER CONFIGURATION
// ----------------------------------------------------------------

// TODO move swagger stuff to separate file

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "API for Home Service Application",
    },
    servers: [
      {
        url: `http://${process.env.API_HOST}:${process.env.API_PORT}`,
      },
    ],
  },
  apis: ["./api/**/*.js"], // where swagger should look for api endpoints (basically in all files)
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// ----------------------------------------------------------------
// MIDDLEWARES 
// ----------------------------------------------------------------

// TODO move middleware to separate file

// middleware - cors (allow requests from the frontend, all ips. CHANGE THIS IN PROD)
app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

// middleware - custom middleware before processing requests
app.use((req, res, next) => {
    // console.log('hello from custom middleware');
    next();
});

// middleware - parses(decrypts, decompresses) JSON bodies
app.use(express.json());

// middleware - logs request details
app.use(morgan('common'));


// ----------------------------------------------------------------
// ROUTES
// ----------------------------------------------------------------

// TODO move routes to separate file

const { categoriesRouter } = require('./api/categories/routes');
const { businessesRouter } = require('./api/businesses/routes');
const { bookingsRouter } = require('./api/bookings/routes');

// middleware to handle the routes. here we define the route prefix
app.use('/api/categories', categoriesRouter);
app.use('/api/businesses', businessesRouter);
app.use('/api/bookings', bookingsRouter);


// ----------------------------------------------------------------
// DATABASE CONNECTION & SERVER LAUNCH
// ----------------------------------------------------------------

// TODO move database connection to separate file

// connect to the database
mongoose.connect(process.env.DB_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to the database successfully");
    app.listen(process.env.API_PORT, () => {
    console.log(`Server is running on ${process.env.API_PROTOCOL}://${process.env.API_HOST}:${process.env.API_PORT}`);
  });
})
.catch((err) => console.log(err));
