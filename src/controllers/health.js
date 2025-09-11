import { Router } from 'express';

const routerHealth = Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Verifica o status da API
 *     responses:
 *       200:
 *         description: API está saudável
 *         content:
 *           application/json:
 *             example:
 *               status: "ok"
 */
routerHealth.get('/health', (_, res) => {
  res.status(200).json({
    status: ok,
  });
});

export { routerHealth };
