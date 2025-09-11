import { convertToRoman } from './convertToRoman.js';

export function operationSub(body) {
  const numbers = body['numeros'];
  const algarismos = [];
  let sub = 0;
  let aux = numbers[0];
  let result = '';

  for (const i in numbers) {
    algarismos.push(convertToRoman(numbers[i]));
    result += `${algarismos[i]} - `;
    sub = Math.abs(aux - numbers[i]);
    aux = sub;
  }
  return { operacao: `${result}` + `= ${convertToRoman(sub)}` };
}
