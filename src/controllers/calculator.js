import { Router } from 'express';
import {
  convertNumbers,
  operationSub,
  operationSum,
  subRoman,
  sumRoman,
} from '../services/index.js';
import { validateNumbers } from '../middlewares/validateNumbers.js';

const routerCalculator = Router();

/**
 * @swagger
 * /convertNumbers:
 *   post:
 *     summary: Converte números decimais em romanos e vice-versa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numeros:
 *                 type: array
 *                 items:
 *                   type: number
 *             example:
 *               numeros: [1, 5, 10]
 *     responses:
 *       200:
 *         description: Lista de números convertidos
 *         content:
 *           application/json:
 *             example:
 *               converted: [I, V, X]
 *       400:
 *         description: Parâmetros inválidos
 */
routerCalculator.post('/convertNumbers', validateNumbers, ({ body }, res) => {
  const result = convertNumbers(body);
  res.status(200).json(result);
});

/**
 * @swagger
 * /operationSub:
 *   post:
 *     summary: Subtrai números e retorna resultado em decimal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numeros:
 *                 type: array
 *                 items:
 *                   type: number
 *             example:
 *               numeros: [20, 5]
 *     responses:
 *       200:
 *         description: Resultado da subtração
 *         content:
 *           application/json:
 *             example:
 *               sub: 15
 *       400:
 *         description: Parâmetros inválidos
 */
routerCalculator.post('/operationSub', validateNumbers, ({ body }, res) => {
  const result = operationSub(body);
  res.status(200).json(result);
});

/**
 * @swagger
 * /operationSum:
 *   post:
 *     summary: Soma números e retorna resultado em decimal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numeros:
 *                 type: array
 *                 items:
 *                   type: number
 *             example:
 *               numeros: [7, 8]
 *     responses:
 *       200:
 *         description: Resultado da soma
 *         content:
 *           application/json:
 *             example:
 *               sum: 15
 *       400:
 *         description: Parâmetros inválidos
 */
routerCalculator.post('/operationSum', validateNumbers, ({ body }, res) => {
  const result = operationSum(body);
  res.status(200).json(result);
});

/**
 * @swagger
 * /subRoman:
 *   post:
 *     summary: Subtrai números e retorna resultado em romano
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numeros:
 *                 type: array
 *                 items:
 *                   type: number
 *             example:
 *               numeros: [20, 4]
 *     responses:
 *       200:
 *         description: Resultado da subtração em decimal e romano
 *         content:
 *           application/json:
 *             example:
 *               sub: 16
 *               subRoman: XVI
 *       400:
 *         description: Parâmetros inválidos
 */
routerCalculator.post('/subRoman', validateNumbers, ({ body }, res) => {
  const result = subRoman(body);
  res.status(200).json(result);
});

/**
 * @swagger
 * /sumRoman:
 *   post:
 *     summary: Soma números e retorna resultado em romano
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numeros:
 *                 type: array
 *                 items:
 *                   type: number
 *             example:
 *               numeros: [10, 5]
 *     responses:
 *       200:
 *         description: Resultado da soma em decimal e romano
 *         content:
 *           application/json:
 *             example:
 *               sum: 15
 *               sumRoman: XV
 *       400:
 *         description: Parâmetros inválidos
 */
routerCalculator.post('/sumRoman', validateNumbers, ({ body }, res) => {
  const result = sumRoman(body);
  res.status(200).json(result);
});

export { routerCalculator };
