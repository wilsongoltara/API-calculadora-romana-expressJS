const express = require('express');
const convertToRoman = require('./convertToRoman');
const sumRoman = require('./sumRoman');
const subRoman = require('./subRoman');
const routes = express.Router();

//Aviso erro ao entrar na pasta raiz
routes.get('/', (_, res) => { 
    res.status(404).send("Not Found");
})

//Responde com um mensagem sobre o que é a API
routes.get('/about', (_, res) => {
    res.send({
        msg:"API Calculadora romana"
    });
})

//Responde com uma menssagem. 
routes.get('/calculadora', (_, res) => {
    res.send("Calculadora Romana");
})

//Chama funcao sumRoman passando valores recebidos
// e retorna soma em algarismo arábico e romano
routes.get('/calculadora/soma/', (req, res) => {
    const body = req.body;
    const sum = sumRoman(body);
    res.send({"soma": sum,
            "soma-romana:":convertToRoman(sum)});
})

//Chama funcao subRoman passando valores recebidos
// e retorna soma em algarismo arábico e romano
routes.get('/calculadora/subtracao', (req, res) => {
    const body = req.body;
    const sub = Math.abs(subRoman(body));
    res.send({"subtracao": sub,
            "sub-romana:":convertToRoman(sub)});
})

//Retorna json com os números e seus respectivos algarismos.
routes.get('/calculadora/numeros', (req, res) => {
    const body = req.body;
    let algarismos = [];

    for (let i in body)
    {
      algarismos.push(convertToRoman(body[i]));
    }
    res.json({"Algarismos": algarismos,"Números": body});
})

//Retorna a operacao feita na sumRoman
routes.get('/calculadora/operacao/soma', (req, res) => {
    const body = req.body;
    let algarismos = [];
    let sum = convertToRoman(sumRoman(body));
    let result = ``;
    
    for (let i in body)
    {
        algarismos.push(convertToRoman(body[i]));
        result += `${algarismos[i]} + `;
    }
    res.send(`${result}` + `= ${sum}`);
})
//Retorna a operacao feita na subRoman
routes.get('/calculadora/operacao/subtracao', (req, res) => {
    const body = req.body;
    let algarismos = [], i;
    let sub = Math.abs(subRoman(body));
    let result = ``;
    sub = convertToRoman(sub);
      
    for(i in body)
    {
        algarismos.push(convertToRoman(body[i]));
        result += `${algarismos[i]} - `;
    }
    res.send(`${result}` + `= ${sub}`);
})

module.exports = routes;