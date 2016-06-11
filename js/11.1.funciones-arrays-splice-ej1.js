var lista = []; // lista vacia

// Todas las funciones retornan valor
//  Si no usamos la sentencia de retorno "return", por defecto devuelve "undefined"

agregarItem('Pelusso', true);

function agregarItem(item, posicion, indice) { // posicion -> 0: inicio, 1: medio, 2: final
	if (posicion === 0) {
		lista.unshift(item);
	} else if (posicion === 2) {
		lista.push(item);
	} else {
		// Mutable, modifica la lista original
		lista.splice(indice, 0, item);
	}

	return lista.length;
}

function eliminarItem(posicion, indice) {
	if (posicion === 0) {
		lista.shift();
	} else if (posicion === 2) {
		lista.pop();
	} else {
		lista.splice(indice, 1);
	}

	return lista.length;
}
