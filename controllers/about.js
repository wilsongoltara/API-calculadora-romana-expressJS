module.exports = (app) => {
    app.get('/api/about', (_, res) => {
        res.send("API Calculadora romana!");
    });
}