import { Router } from 'express';

const routerHealth = Router();

app.get('/health', (_, res) => {
  res.json({
    status: ok,
  });
});

export { routerHealth };
