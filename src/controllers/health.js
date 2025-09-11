import { Router } from 'express';

const routerHealth = Router();

routerHealth.get('/health', (_, res) => {
  res.json({
    status: ok,
  });
});

export { routerHealth };
