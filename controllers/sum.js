const sumRoman = require('./sumRoman');
const convertToRoman = require('./convertToRoman');

module.exports = (app) => {
    app.get('/api/calculadora/soma/', (req, res) => {
        res.send("Soma")
    });

    app.post('/api/calculadora/soma/', (req, res) => {
        const body = req.body;
        const sum = sumRoman(body);
        res.json({"soma": sum,
                "soma-romana:":convertToRoman(sum)});
    });
}