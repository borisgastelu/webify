var numeros = [5, 2, 3, 1, 6, 10];

console.log('Original: ' + numeros);

// ASCENDENTE
numeros.sort(function (a, b) {  // Callback
    return a - b;
});
console.log('Ascendente: ' + numeros);

// DESCENDENTE
numeros.sort(function (a, b) {  // Callback
    return b - a;
});
console.log('Descendente: ' + numeros);
