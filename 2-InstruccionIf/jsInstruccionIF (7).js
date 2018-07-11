function mostrar()
{
//tomo la edad  

var edad;
var ec;

edad = parseInt(document.getElementById("edad").value);
ec = document.getElementById("estadoCivil").value;

if(edad <18 && ec != "Soltero" ){

alert("Es muy pequeño para NO ser Soltero");

}



}//FIN DE LA FUNCIÓN