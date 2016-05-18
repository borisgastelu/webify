var valor = prompt("Ingrese un valor:");
valor = parseInt(valor);    // "10" -> 10

if (valor === 10) {
    alert("Calculo x10: " + (valor * 10));
} else if (!valor) {
    alert('Valor no ingresado!');
} else {
    alert("Valor ingresado: " + valor);
}

// Comentario nuevo

// Falsy (representan valores falsos)
// 0, '', "", false, undefined, null, NaN
