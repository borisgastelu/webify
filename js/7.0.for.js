var cant = prompt('Ingrese cantidad de iteraciones');
cant = parseInt(cant);

//  Inicializador ; Condicion ; Incrementador
console.log('ASCENDENTE');
for (var i = 0;    i < cant;   i++) {
    console.log('Iteración #' + (i + 1));   // Cuerpo del iterador
}

console.log('DESCENDENTE');
for (var i = cant; i > 0; i--) {
    console.log('Iteración #' + i);
}

// for (var i = 0;    i < cant;   i += 1) {
//     console.log('Iteración #' + (i + 1));
// }
//
// for (var i = 1;    i <= cant;   i += 1) {
//     console.log('Iteración #' + i);
// }
