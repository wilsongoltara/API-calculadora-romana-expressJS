const subRoman = require('./subRoman');
const convertToRoman = require('./convertToRoman');;

module.exports = (app) => {
    app.get('/api/calculadora/subtracao', (_, res) => {
        res.send("Subtração!")
    });

    app.post('/api/calculadora/subtracao', (req, res) => {
        const body = req.body;
        const sub = Math.abs(subRoman(body['numeros']));
        res.send({"subtracao": sub,
                "sub-romana:":convertToRoman(sub)});
    });
}
