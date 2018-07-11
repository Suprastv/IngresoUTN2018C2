function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var numeroRandom;

numeroRandom = parseInt(Math.floor(Math.random() * 10) + 1); 

if(numeroRandom == 9 || numeroRandom == 10)	
{
	alert("Tu nota es: " + numeroRandom + ". ¡EXCELENTE!");
}
else if(numeroRandom >= 4)
{
	alert("Tu nota es: " + numeroRandom + ". ¡APROBO!");
}
else
{
	alert("Tu nota es: " + numeroRandom + ". ¡Vamos, la proxima se puede!");
}
}//FIN DE LA FUNCIÓN