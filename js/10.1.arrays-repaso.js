// Arrays son colecciones de elementos ordenados secuencialmente
//  NO se restringe por un solo tipo de dato

var listaDinamica = [true, 'Jose', 24.5, { pais: 'Peru', ciudad: 'Lima' }];

// Ej 1
var listaNum = [1, 2, 3, 4];    // Number

console.log(listaNum);

for (let i = 0; i < listaNum.length; i++) {
    listaNum[i] = listaNum[i] * 10;
}

console.log(listaNum);

// Ej 2
var listaNombres = ['Maria', 'Pepe Lucho', 'Josefina']; // String

for (let i = 0; i < listaNombres.length; i++) {
    listaNombres[i] += '...';
}
console.log(listaNombres);
