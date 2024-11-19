import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API for Home Service Application',
    },
    servers: [
      {
        url:
          process.env.NODE_ENV === 'production'
            ? process.env.API_HOST_PROD
            : `http://${process.env.API_HOST_LOCAL}:${process.env.API_PORT_LOCAL}`,
      },
    ],
  },
  apis: ['./api/**/*.js'], // where swagger should look for api endpoints (basically in all files)
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

const swaggerMiddleware = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

// why this helps?? https://stackoverflow.com/questions/35758584/cannot-redeclare-block-scoped-variable
export { swaggerMiddleware };
