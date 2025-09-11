import { Router } from 'express';

const routerAbout = Router();

app.get('/about', (_, res) => {
  res.json({
    msg: 'Calculadora romana',
  });
});

export { routerAbout };
