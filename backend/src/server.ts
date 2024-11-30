import express from 'express';
import { swaggerMiddleware } from './middlewares/swaggerMiddleware';
import { globalMiddlewares } from './middlewares/globalMiddlewares';
import { startServer } from './start-server';
import { setupRouter } from './setup-router';

const app = express();

globalMiddlewares(app);
swaggerMiddleware(app);
setupRouter(app);
startServer(app);
