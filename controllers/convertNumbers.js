const convertToRoman = require('./convertToRoman');

module.exports = (app) => {
    app.get('/api/calculadora/converteNumeros', (req, res) => {
        const body = req.body['numeros'];
        let algarismos = [];
        for (let i in body)
        {
          algarismos.push(convertToRoman(body[i]));
        }
        res.json({"Algarismos": algarismos,"Números": body});
    })
}