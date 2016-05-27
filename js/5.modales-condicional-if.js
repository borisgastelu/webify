var valor = prompt("Ingrese un valor:");
debugger;
valor = parseInt(valor);    // "10" -> 10

if (valor === 10) {
    alert("Calculo x10: " + (valor * 10));
} else if (confirm("Desea continuar?")) {
    alert('Ok Sigamos!');
} else {
    alert("Chau compare!");
}

// Comentario nuevo

// Falsy (representan valores falsos)
// 0, '', "", false, undefined, null, NaN
