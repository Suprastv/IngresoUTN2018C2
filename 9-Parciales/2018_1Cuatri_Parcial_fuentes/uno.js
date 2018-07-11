
function mostrar()
{
var largo;
var ancho;
var perimetro;

largo = parseInt(prompt("Ingrese el largo del rectangulo"));
ancho = parseInt(prompt("Ingrese el ancho del rectangulo"));

perimetro = 2 * largo + ancho;

alert("El perimetro del rectangulo es: " + perimetro);
}
