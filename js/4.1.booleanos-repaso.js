// Boolean: true (verdadero) o false (falso)

// Regular/Standard Comparison
//  No verifica el tipo de dato
console.log(4 == 4);    // Number == Number
console.log(4 == '4');  // Number == String
console.log(4 != '4');  // Number == String

// Strict Comparison
//  Si verifica el tipo de dato
console.log(4 === '4');  // Number == String
console.log(4 !== '4');  // Number == String

// <, >, <=, >=

// Shortcircuit (&&)
//  Retorna el VALOR del ultimo operando FALSE
console.log(true && false && 10);
console.log(true && 0 && false);
console.log('' && 0 && false);

var bool = true;
var num = 100;
console.log('Hola' && bool && num && undefined);

// Default (||)
// Retorna el VALOR del ultimo operando TRUE
console.log(false || 'Hola gente');
console.log(100 || null);

// Falsies
//  '', "", 0, false, undefined, null, NaN
