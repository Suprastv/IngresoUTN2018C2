function mostrar()
{
//tomo la edad  

var edad;
var ec;


edad = parseInt(document.getElementById("edad").value);
ec = document.getElementById("estadoCivil").value;

if (edad < 18 && ec != "Soltero")
{

return;

} 
else if(ec = "Soltero" && edad>=18)
{

alert("Es soltero y no es menor");

} 

}//FIN DE LA FUNCIÓN