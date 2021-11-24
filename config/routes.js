const express = require('express')
const routes = express.Router()

//Converte para Algarismos romanos.
const convertToRoman = (num) => {
    const roman = 
    {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }
    let str = ''
  
    for (let i of Object.keys(roman)) 
    {
        let q = Math.floor(num / roman[i])
        num -= q * roman[i]
        str += i.repeat(q)
    } 
    return str
}

//Soma números recebidos
const somaRomano = (valores) => {
	let acumulador = 0
	let valoresEmDecimal = valores;

	for(i = 0; i < valoresEmDecimal.length; i++) 
    {
		acumulador += valoresEmDecimal[i]
	}
    console.log(acumulador)
	return acumulador
}

//Subtraí números recebidos
const subtracaoRomano = (valores) => {
	let aux = valores[0] 
	let valoresEmDecimal = valores

	for(i = 1; i < valoresEmDecimal.length; i++)
    {
		sub = aux - valoresEmDecimal[i]
        aux = sub
	}
	return sub
}

//Aviso erro ao entrar na pasta raiz
routes.get('/', (req, res) => { 
    res.status(404).send("Not Found")
})

//Responde com um mensagem sobre o que é a API
routes.get('/about', (req, res) => {
    res.send({
        msg:"API Calculadora romana"
    })
})

//Responde com uma menssagem. 
routes.get('/calculadora', (req, res) => {
    res.send("Calculadora Romana")
})

//Chama funcao somaRomando passando valores recebidos
// e retorna soma em algarismo arábico e romano
routes.get('/calculadora/soma/', (req, res) => {
    const body = req.body
    const soma = somaRomano(body)
    res.send({"soma": soma,
            "soma-romana:":convertToRoman(soma)})
})

//Chama funcao subtracaoRomando passando valores recebidos
// e retorna soma em algarismo arábico e romano
routes.get('/calculadora/subtracao', (req, res) => {
    const body = req.body
    const sub = Math.abs(subtracaoRomano(body))
    res.send({"subtracao": sub,
            "sub-romana:":convertToRoman(sub)})
})

//Retorna json com os números e seus respectivos algarismos.
routes.get('/calculadora/numeros', (req, res) => {
    const body = req.body
    let algarismos = [], i

    for(i  in body)
    {
      algarismos.push(convertToRoman(body[i]))
    }
    res.json({"Algarismos": algarismos,"Números": body})
})

//Retorna a operacao feita na somaRomano
routes.get('/calculadora/operacao/soma', (req, res) => {
    const body = req.body
    let algarismos = [], i
    let soma = convertToRoman(somaRomano(body))
    let result = ``
    
    for(i in body)
    {
        algarismos.push(convertToRoman(body[i]))
        result += `${algarismos[i]} + `
    }
    res.send(`${result}` + `= ${soma}`)
})
//Retorna a operacao feita na subtracaoRomano
routes.get('/calculadora/operacao/subtracao', (req, res) => {
    const body = req.body
    let algarismos = [], i
    let sub = Math.abs(subtracaoRomano(body))
    let result = ``
    sub = convertToRoman(sub)
      
    for(i in body)
    {
        algarismos.push(convertToRoman(body[i]))
        result += `${algarismos[i]} - `
    }
    res.send(`${result}` + `= ${sub}`)
})

module.exports = routes