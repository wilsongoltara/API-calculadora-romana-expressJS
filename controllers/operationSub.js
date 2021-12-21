const convertToRoman = require('./convertToRoman');
const subRoman = require('./subRoman');

module.exports = (app) => {
    app.get('/api/calculadora/operacaoSubtracao', (req, res) => {
        const body = req.body['numeros'];
        let algarismos = [], i;
        let sub = Math.abs(subRoman(body));
        let result = ``;
        sub = convertToRoman(sub);
          
        for(i in body)
        {
            algarismos.push(convertToRoman(body[i]));
            result += `${algarismos[i]} - `;
        }
        res.send(`${result}` + `= ${sub}`);
    })
}