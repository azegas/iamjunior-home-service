const express = require("express");
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const { swaggerMiddleware } = require('./middlewares/swagger-middleware');
const { connectToDB } = require('./utils/db');

// ----------------------------------------------------------------
// GLOBAL MIDDLEWARES 
// ----------------------------------------------------------------

swaggerMiddleware(app);

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
const { authRouter } = require('./api/auth/routes');

// middleware to handle the routes. here we define the route prefix
app.use('/api/categories', categoriesRouter);
app.use('/api/businesses', businessesRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/auth', authRouter);

// ----------------------------------------------------------------
// DATABASE CONNECTION & SERVER LAUNCH
// ----------------------------------------------------------------

const startServer = async () => {
  try {
      await connectToDB(); // Connect to the database
      // if connection is successful, start the server
      app.listen(process.env.API_PORT, () => {
          console.log(`Server is running on ${process.env.API_PROTOCOL}://${process.env.API_HOST}:${process.env.API_PORT}`);
      });
  } catch (error) {
      console.error('Failed to start the server:', error);
  }
};

startServer();