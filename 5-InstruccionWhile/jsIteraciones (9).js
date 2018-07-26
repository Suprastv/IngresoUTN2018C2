function mostrar()
{

	// declarar variables
	
	var respuesta;
	var maximo;
	var flag = 0;
	var minimo;
	var numero;

	do
	{
		numero = parseInt(prompt("Ingrese un numero"));

		if(numero > maximo || flag == 0)
		{
			maximo = numero;
		}

		if(numero < minimo || flag == 0)
		{
			minimo = numero;
			flag = 1;
		}


	respuesta = prompt("Desea continuar? (si/no).");

	}while(respuesta == "si");


document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN