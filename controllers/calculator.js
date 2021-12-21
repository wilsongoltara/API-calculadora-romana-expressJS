module.exports = (app) => {
    app.get('/api/calculadora', (_, res) => {
        res.send("Calculadora Romana!");
    });
}