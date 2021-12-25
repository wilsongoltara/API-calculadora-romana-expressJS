const convertToRoman = require("../controllers/convertToRoman");

class Calculator {
    sumRoman(body, res) {
        const numbers = body['numeros'];
        let sum = 0;
        for(let i in numbers) {
            sum += parseInt(numbers[i]);
        }
        res.status(200).json({
            "sum": `${sum}`,
            "sum-roman": convertToRoman(sum)
        });
    }

    subRoman(body, res) {
        const numbers = body['numeros'];
        let aux = numbers[0];
        let sub = 0;
        for (let i = 1; i < numbers.length; i++) {
            sub = Math.abs(aux - numbers[i]);
            aux = sub;
        }
        res.status(200).json({
            "subtracao": `${sub}`,
            "sub-romana:": convertToRoman(sub)
        });
    }

    convertNumbers(body, res) {
        const numbers = body['numeros'];
        let algarismos = [];
        for (let i in numbers)
        {
          algarismos.push(convertToRoman(numbers[i]));
        }
        res.status(200).json({
            "algarismos": `${algarismos}`,
            "numeros": `${numbers}`
        });
    }
    //Todo terminar de resolver a parte de operacões
    operationSum(body, res) {
        const numbers = body["numeros"]
        let algarismos = [];
        let result = ``;
        
        for (let i in numbers) {
            algarismos.push(convertToRoman(numbers[i]));
            result += `${algarismos[i]} + `;
        }
        res.json(`${result} = ${convertToRoman(Calculator.sumRoman(numbers))}`);
    }
}

module.exports = new Calculator;