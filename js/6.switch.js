var colorNum = prompt('Ingrese número del color:');
colorNum = parseInt(colorNum);

var mensajeBase = 'Ud. ha elegido ';
var color = '';

switch (colorNum) {
    case 1:
        color += 'rojo ';
    case 2:
        color += 'verde ';
        break;
    case 3:
        color += 'azul ';
    case 4:
        color += 'naranja ';
        break;
    default:
        color += 'morado ';
}

alert(mensajeBase + color);
