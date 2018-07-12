function mostrar()
{
var planeta;

planeta = prompt("Ingrese el planeta");

switch(planeta)
{
case "tierra":
    
    alert("Aca vivimos");
    break;

case "mercurio", "venus", "marte", "jupiter":
    alert("Aca hace mas calor");
    break;

case "saturno", "urano", "neptuno", "pluto":
    alert("Aca hace mas frio");
    break;

default:
    alert("No es un planeta valido");
    break;
}
}
