const Calculator = require('../models/calculator');

module.exports = (app) => {
  app.get('/api/calculadora/subtracao', (_, res) => {
    res.status(200).json({
      numeros: '[Digite os numeros]',
    });
  });

  app.post('/api/calculadora/subtracao', (req, res) => {
    const body = req.body;
    Calculator.subRoman(body, res);
  });
};
