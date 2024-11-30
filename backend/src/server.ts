import express from 'express';
export const app = express();
import { swaggerMiddleware } from './middlewares/swaggerMiddleware';
import { globalMiddlewares } from './middlewares/globalMiddlewares';
import { startServer } from './start-server';
import { setupRouter } from './setup-router';

globalMiddlewares(app);
swaggerMiddleware(app);
setupRouter(app);
startServer(app);
