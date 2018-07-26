function mostrar()
{
	
	var positivo = 0;
	var cantPositivos=0;
	var negativo = 0;
	var cantNegativos=0;
	var numero;
	
	var respuesta='si';

do
{

	numero = parseInt(prompt("Ingrese un numero."));

	if(numero < 0)
	{

		negativo = negativo + numero;

	}
	else
	{


		positivo = positivo + numero;

	}


respuesta = prompt("Desea continuar? (si/no).");

}while(respuesta=="si");

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;


}//FIN DE LA FUNCIÓN