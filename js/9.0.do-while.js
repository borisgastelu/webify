var $cant = prompt('Ingrese cantidad de iteraciones:');
$cant = parseInt($cant);

// Inicializador
var contador = 0;

// Por lo menos una vez el cuerpo del do...while sera ejecutado
do {

    console.log('Iteracion #' + contador);
    contador += 1;      // Incrementador

} while (contador < $cant)  // Condicion
