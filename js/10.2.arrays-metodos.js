var lista = [];     // Arrays son un tipo especial de objetos
var cant = prompt('Cantidad de elementos:');
cant = parseInt(cant);

for (let i = 0; i < cant; i++) {
    var elem = prompt('Ingrese algo:');
    // lista[i] = elem;
    // lista.push(elem);    // Ingresa elemento al final
    lista.unshift(elem);    // Ingresa elemento al inicio
}

console.log(lista);

// console.log(lista.pop());   // Retira elemento del final
// console.log(lista);

console.log(lista.shift());   // Retira elemento del inicio
console.log(lista);
