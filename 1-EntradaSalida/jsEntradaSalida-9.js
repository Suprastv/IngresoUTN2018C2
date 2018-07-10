/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var aumento;
var resultado;
var sueldo;

sueldo = document.getElementById("sueldo").value;

aumento = parseInt(sueldo) * 10 / 100;

resultado = parseInt(sueldo) + parseInt(aumento);
document.getElementById("resultado").value = resultado;
}
