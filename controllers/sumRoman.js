//Soma números recebidos
function sumRoman(values) {
	let acumulador = 0;
	let valoresEmDecimal = values;

	for (let i = 0; i < valoresEmDecimal.length; i++) {
		acumulador += parseInt(valoresEmDecimal[i]);
	}
	return acumulador;
}

module.exports = sumRoman;