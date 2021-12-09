const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./config/routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log("Express start at http://localhost:3000");
})