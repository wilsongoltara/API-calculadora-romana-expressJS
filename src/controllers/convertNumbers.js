const calculator = require('../models/calculator');

module.exports = (app) => {
  app.get('/api/calculadora/converteNumeros', (req, res) => {
    res.status(200).json({
      numeros: '[Digite os numeros]',
    });
  });

  app.post('/api/calculadora/converteNumeros', (req, res) => {
    const body = req.body;
    calculator.convertNumbers(body, res);
  });
};
