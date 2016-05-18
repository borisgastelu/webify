// console.log(4 == 4);
// console.log(4 != 4);

// RECOMENDADO
// console.log(4 === '4');
// console.log(4 !== '4');

// >, <, >=, <=

// Operador Shortcircuit (&&) AND
//  Devuelve el ULTIMO valor q es evaluado como FALSE
var testShortcircuit = true && 'hola' && undefined && 1;
console.log(testShortcircuit);

// Operador Default (||) OR
//  Devuelve el ULTIMO valor q es evaluado como TRUE
var testDefault = 'hola' || 20;
console.log(testDefault);


// Negacion (!)
var testNeg = undefined;    // Variable creada pero no asignada
console.log(!testNeg);

// Falsy (representan valores falsos)
// 0, '', "", false, undefined, null, NaN


// Tabla Logica (AND)
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false
//
// Tabla Logica (OR)
// true && true -> true
// true && false -> true
// false && true -> true
// false && false -> false
