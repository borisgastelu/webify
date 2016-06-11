var listaStr = 'gato,perro,loro';
console.log('Original: ' + listaStr);

var listaStrSeparada = separar(listaStr, 'r');
console.log('Lista Separada: ', listaStrSeparada);

var listaUnida = unir(listaStrSeparada, '---');
console.log('Lista Unida: ', listaUnida);

function separar(texto, separador) {
    return texto.split(separador);
}

function unir(array, caracter) {
    return array.join(caracter);
}
