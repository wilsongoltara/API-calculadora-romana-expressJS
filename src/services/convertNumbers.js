import { convertToRoman } from './index.js';

export function convertNumbers(body) {
  const numbers = body['numeros'];
  const algarismos = [];

  numbers.map((number) => {
    algarismos.push(convertToRoman(number));
  });

  return {
    algarismos: `${algarismos}`,
    numeros: `${numbers}`,
  };
}
