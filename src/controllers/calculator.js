module.exports = (app) => {
  app.get('/api/calculadora', (_, res) => {
    res.json('Calculadora Romana');
  });
};
