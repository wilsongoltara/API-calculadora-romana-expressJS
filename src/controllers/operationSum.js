const Calculator = require('../models/calculator');

module.exports = (app) => {
    app.get('/api/calculadora/operacaoSoma', (_, res) => {
        res.status(200).json({
            "numeros":"[Digite os numeros]"
        });
    });

    app.post('/api/calculadora/operacaoSoma', (req, res) => {
        const body = req.body;
        Calculator.operationSum(body, res);
    });
}