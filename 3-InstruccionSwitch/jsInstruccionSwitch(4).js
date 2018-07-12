function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        alert("Tiene 30 dias.");
        break;
    
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        alert("Tiene 31 dias.");
        break;
    default: //febrero
        alert("Tiene 28 dias.")
}
	
	



}//FIN DE LA FUNCIÓN