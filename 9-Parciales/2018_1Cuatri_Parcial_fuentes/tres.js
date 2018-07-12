function mostrar()
{
var precio;
var descuento;
var valDescuento;
var precioFinal;

precio = parseInt(prompt("Ingrese el precio"));

valDescuento = parseInt(prompt("Ingrese el descuento"));

descuento = precio * valDescuento / 100;

precioFinal = precio - descuento;

document.getElementById("elPrecioFinal").value = precioFinal;

}
