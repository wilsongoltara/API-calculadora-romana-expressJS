const sumRoman = require('./sumRoman');
const convertToRoman = require('./convertToRoman');

module.exports = (app) => {
    app.get('/api/calculadora/soma/', (_, res) => {
        res.send("Soma!");
    });

    app.post('/api/calculadora/soma/', (req, res) => {
        const body = req.body;
        const sum = sumRoman(body['numeros']);
        res.json({"soma": sum,
                "soma-romana:":convertToRoman(sum)});
    });
}