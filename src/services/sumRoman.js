export function sumRoman(body) {
  const numbers = body['numeros'];
  let sum = 0;
  numbers.map((number) => {
    sum += parseFloat(number);
  });

  return {
    sum: `${sum}`,
    'sum-roman': convertToRoman(sum),
  };
}
