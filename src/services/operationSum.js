import { convertToRoman } from './convertToRoman.js';

export function operationSum(body) {
  const numbers = body['numeros'];
  const algarismos = [];
  let result = '';
  let sum = 0;

  for (const i in numbers) {
    algarismos.push(convertToRoman(numbers[i]));
    result += `${algarismos[i]} + `;
    sum += parseInt(numbers[i]);
  }

  return { operação: `${result} = ${convertToRoman(sum)}` };
}
