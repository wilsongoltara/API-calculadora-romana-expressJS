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

routerCalculator.post('/convertNumbers', validateNumbers, ({ body }, res) => {
  const result = convertNumbers(body);
  res.status(200).json(result);
});

routerCalculator.post('/operationSub', validateNumbers, ({ body }, res) => {
  const result = operationSub(body);
  res.status(200).json(result);
});

routerCalculator.post('/operationSum', validateNumbers, ({ body }, res) => {
  const result = operationSum(body);
  res.status(200).json(result);
});

routerCalculator.post('/subRoman', validateNumbers, ({ body }, res) => {
  const result = subRoman(body);
  res.status(200).json(result);
});

routerCalculator.post('/sumRoman', validateNumbers, ({ body }, res) => {
  const result = sumRoman(body);
  res.status(200).json(result);
});

export { routerCalculator };
