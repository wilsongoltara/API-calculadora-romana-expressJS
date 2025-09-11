import { Router } from 'express';

const routerAbout = Router();

routerAbout.get('/about', (_, res) => {
  res.json({
    msg: 'Calculadora romana',
  });
});

export { routerAbout };
