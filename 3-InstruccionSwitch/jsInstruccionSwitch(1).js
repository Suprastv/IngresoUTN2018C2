function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById("mes").value;

switch(mesDelAño)
{
    case "Enero":
        alert("que comiences bien el año");
        break;
    case "Marzo":
        alert("a clases!!!");
        break;
    case "Julio":
        alert("se vienen las vacaiones!!!");
        break;
    case "Diciembre":
        alert("felices fiestas!!!");
        break;
    default:
        alert(mesDelAño);
}


}//FIN DE LA FUNCIÓN