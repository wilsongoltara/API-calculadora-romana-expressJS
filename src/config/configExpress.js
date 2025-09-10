import express from 'express';

export function configExpress() {
  const app = express();

  // Global middlewares
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json({ extended: true }));

  // Error middleware
  app.use((err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
  });

  return { app };
}
