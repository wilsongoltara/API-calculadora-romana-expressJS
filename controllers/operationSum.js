const convertToRoman = require('./convertToRoman');
const sumRoman = require('./sumRoman');

module.exports = (app) => {
    app.get('/api/calculadora/operacaoSoma', (req, res) => {
        const body = req.body['numeros'];
        let algarismos = [];
        let sum = convertToRoman(sumRoman(body));
        let result = ``;
        
        for (let i in body)
        {
            algarismos.push(convertToRoman(body[i]));
            result += `${algarismos[i]} + `;
        }
        res.send(`${result}` + `= ${sum}`);
    })
}