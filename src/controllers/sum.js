const Calculator = require('../models/calculator');

module.exports = (app) => {
  app.get('/api/calculadora/soma/', (_, res) => {
    res.json({
      numeros: '[Digite os números]',
    });
  });

  app.post('/api/calculadora/soma/', (req, res) => {
    const body = req.body;
    Calculator.sumRoman(body, res);
  });
};
