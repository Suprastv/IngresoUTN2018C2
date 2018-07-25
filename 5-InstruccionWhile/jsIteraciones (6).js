function mostrar()
{
	var promedio;
	var numero;
	var contador=1;
	var suma = 0;

while(contador<=5)
{
numero = parseInt(prompt("Ingrese un numero"));

suma = suma + numero;

contador++;
}

promedio = suma / 5;

document.getElementById('suma').value = suma;
document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN