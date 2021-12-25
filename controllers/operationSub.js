const Calculator = require('../models/calculator');
const convertToRoman = require('./convertToRoman');

module.exports = (app) => {
    app.get('/api/calculadora/operacaoSubtracao', (req, res) => {
        const body = req.body['numeros'];
        let algarismos = [];
        let sub = Math.abs(Calculator.subRoman(body));
        let result = ``;
        sub = convertToRoman(sub);
          
        for(let i in body)
        {
            algarismos.push(convertToRoman(body[i]));
            result += `${algarismos[i]} - `;
        }
        res.send(`${result}` + `= ${sub}`);
    })
}