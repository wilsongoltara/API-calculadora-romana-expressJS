import { convertToRoman } from './convertToRoman.js';

export function subRoman(body) {
  const numbers = body['numeros'];
  let aux = numbers[1];
  let sub = 0;

  numbers.map((number) => {
    sub = Math.abs(aux - number);
    aux = sub;
  });

  return {
    subtracao: `${sub}`,
    'sub-romana:': convertToRoman(sub),
  };
}
