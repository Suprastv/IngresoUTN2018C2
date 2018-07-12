function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

switch(laHora)
{
    case laHora >=7 && laHora <=11:
        alert("Es de mañana.");
        break;
    case laHora > 23:
        alert("Ingrese la hora correctamente 0:00 - 23:59")
}
	
	



}//FIN DE LA FUNCIÓN