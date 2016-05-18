// 2. Mostrar un nombre en el navegador

// Variables Globales, son todas aquellas q estan declaradas fuera del cuerpo de una funcion
var browserName = 'Raul';

var output = document.querySelector('#output');
var saludo = 'Hola ';

output.innerText += saludo + browserName;

browserName = 'Raulito';
output.innerText += ', ' + browserName;

consoleName = 'XXXX';
output.innerText += ', ' + consoleName;

// Selectors
//  element -> elem_name
//  id      -> #
//  class   -> .
