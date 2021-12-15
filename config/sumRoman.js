//Soma números recebidos
function sumRoman(values) {
	let acumulador = 0;
	let valoresEmDecimal = values;

	for (let i = 0; i < valoresEmDecimal.length; i++) {
		acumulador += valoresEmDecimal[i];
	}
    console.log(acumulador);
	return acumulador;
}

module.exports = sumRoman;