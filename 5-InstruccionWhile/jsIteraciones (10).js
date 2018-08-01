function mostrar()
{
	
	var acumPositivos = 0;
	var cantPositivos=0;
	var cantCeros = 0;
	var cantPares = 0;
	var acumNegativos = 0;
	var cantNegativos=0;
	var promPositivos;
	var promNegativos;
	var diferencia;
	var numero;
	
	var respuesta='si';

do
{

	numero = parseInt(prompt("Ingrese un numero."));

	if(numero < 0)
	{
		cantNegativos++;
		acumNegativos = acumNegativos + numero;

	}
	else if(numero == 0)
	{
		cantCeros++;
	}
	else
	{
		cantPositivos++;
		acumPositivos = acumPositivos + numero;

	}

	if(numero % 2 == 0)
	{
		cantPares++;
	}

respuesta = prompt("Desea continuar? (si/no).");

}while(respuesta=="si");

promPositivos = acumPositivos / cantPositivos;
promNegativos = acumNegativos / cantNegativos;
diferencia = cantPositivos - cantNegativos;

	document.write("Suma de los negativos: " + acumNegativos + "<br>");
	document.write("Suma de los positivos: " + acumPositivos + "<br>");
	document.write("Cantidad de positivos: " + cantPositivos + "<br>");
	document.write("Cantidad de negativos: " + cantNegativos + "<br>");
	document.write("Cantidad de ceros: " + cantCeros + "<br>");
	document.write("Cantidad de numeros pares: " + cantPares + "<br>");
	document.write("Promedio de numeros negativos: " + promNegativos + "<br>");
	document.write("Promedio de numeros positivos: " + promPositivos + "<br>");
	document.write("Diferencia entre numeros positivos y negativos: " + diferencia + "<br>");

}//FIN DE LA FUNCIÓN