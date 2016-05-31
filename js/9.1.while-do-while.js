var $cant = prompt('Ingrese cantidad de iteraciones:');
$cant = parseInt($cant);

// Inicializador
var contador = 0;

// Se ejecutara siempre q cumpla la condicion
console.log('WHILE');
while (contador < $cant) {

    console.warn('Iteración #' + contador);
    contador += 1;

}

// Por lo menos una vez el cuerpo del do...while sera ejecutado
console.log('DO...WHILE');
contador = 0;
do {

    console.info('Iteracion #' + contador);
    contador += 1;      // Incrementador

} while (contador < $cant)  // Condicion
