import express from 'express';
import routes from '../routes/index.js';
import { setupSwagger } from './swagger.js';

export function configExpress() {
  const app = express();

  // Global middlewares
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json({ extended: true }));

  // Routes
  app.use('/', routes);

  // Swagger
  setupSwagger(app);

  // Error middleware
  app.use((err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
  });

  return { app };
}
