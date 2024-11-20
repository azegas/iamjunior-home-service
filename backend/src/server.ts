import express from 'express';
import 'dotenv/config';
const app = express();
import { swaggerMiddleware } from './middlewares/swaggerMiddleware';
import { globalMiddlewares } from './middlewares/globalMiddlewares';
import { connectToDB } from './utils/db';

// ----------------------------------------------------------------
// MIDDLEWARES (stuff that is applied to all requests)
// ----------------------------------------------------------------

globalMiddlewares(app);
swaggerMiddleware(app);

// ----------------------------------------------------------------
// ROUTES
// ----------------------------------------------------------------

// TODO move routes to separate file

import { categoriesRouter } from './api/categories/routes';
import { businessesRouter } from './api/businesses/routes';
import { bookingsRouter } from './api/bookings/routes';
import { authRouter } from './api/auth/routes';

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
    const host =
      process.env.NODE_ENV === 'production'
        ? process.env.API_HOST_PROD
        : `${process.env.API_PROTOCOL_LOCAL}://${process.env.API_HOST_LOCAL}:${process.env.API_PORT_LOCAL}`;
    app.listen(
      // if production, listen on port 0 to let the cloud provider choose the port
      process.env.NODE_ENV === 'production' ? 0 : process.env.API_PORT_LOCAL,
      () => {
        console.log(`Server is running on ${host}`);
      },
    );
  } catch {
    // eslint-disable-next-line no-console
    console.error('Failed to start the server:');
  }
};

startServer();
