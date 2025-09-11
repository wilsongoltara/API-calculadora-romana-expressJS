import { Router } from 'express';

const routerAbout = Router();

/**
 * @swagger
 * /about:
 *   get:
 *     summary: Retorna informações sobre a API
 *     responses:
 *       200:
 *         description: Informações da calculadora romana
 *         content:
 *           application/json:
 *             example:
 *               msg: "Calculadora romana"
 */
routerAbout.get('/about', (_, res) => {
  res.status(200).json({
    msg: 'Calculadora romana',
  });
});

export { routerAbout };
