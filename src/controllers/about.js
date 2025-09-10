module.exports = (app) => {
  app.get('/api/about', (_, res) => {
    res.json({
      msg: 'Calculadora romana',
    });
  });
};
