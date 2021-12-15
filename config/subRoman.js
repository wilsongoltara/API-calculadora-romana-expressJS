//Subtraí números recebidos
function subRoman(values) {
	let aux = values[0];
	let valoresEmDecimal = values;
    let sub = 0;
	for (let i = 1; i < valoresEmDecimal.length; i++) {
		sub = aux - valoresEmDecimal[i];
        aux = sub;
	}
	return sub;
}

module.exports = subRoman;