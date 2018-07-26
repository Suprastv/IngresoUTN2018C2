function mostrar()
{

	var suma = 0;
	var promedio;
	var cantVeces = 1;
	var numero;
	var respuesta;

do {
   
numero = parseInt(prompt("Ingrese un numero"));

suma = suma + numero;

cantVeces++;

respuesta = prompt("Desea continuar?");

} while (respuesta == "si");


promedio = suma / cantVeces;

document.getElementById('suma').value=suma;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN