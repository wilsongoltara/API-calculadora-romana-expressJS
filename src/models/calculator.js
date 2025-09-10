const convertToRoman = require('./convertToRoman');

class Calculator {
  sumRoman(body, res) {
    const numbers = body['numeros'];
    let sum = 0;
    numbers.map((number) => {
      sum += parseFloat(number);
    });

    res.status(200).json({
      sum: `${sum}`,
      'sum-roman': convertToRoman(sum),
    });
  }

  subRoman(body, res) {
    const numbers = body['numeros'];
    let aux = numbers[1];
    let sub = 0;

    numbers.map((number) => {
      sub = Math.abs(aux - number);
      aux = sub;
    });

    res.status(200).json({
      subtracao: `${sub}`,
      'sub-romana:': convertToRoman(sub),
    });
  }

  convertNumbers(body, res) {
    const numbers = body['numeros'];
    const algarismos = [];

    numbers.map((number) => {
      algarismos.push(convertToRoman(number));
    });

    res.status(200).json({
      algarismos: `${algarismos}`,
      numeros: `${numbers}`,
    });
  }
  //Todo terminar de resolver a parte de operacões
  operationSum(body, res) {
    const numbers = body['numeros'];
    const algarismos = [];
    let result = '';
    let sum = 0;

    for (const i in numbers) {
      algarismos.push(convertToRoman(numbers[i]));
      result += `${algarismos[i]} + `;
      sum += parseInt(numbers[i]);
    }
    res.status(200).json({ operação: `${result} = ${convertToRoman(sum)}` });
  }

  operationSub(body, res) {
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
    res
      .status(200)
      .json({ operacao: `${result}` + `= ${convertToRoman(sub)}` });
  }
}

module.exports = new Calculator();
