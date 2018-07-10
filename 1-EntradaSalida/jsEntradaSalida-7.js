/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var n1;
    var n2;

    n1 = document.getElementById("numeroUno").value;
    n2 = document.getElementById("numeroDos").value;

    var suma = parseInt(n1) + parseInt(n2);

    alert("La suma de los dos numeros es: "+suma);
}

function restar()
{
    var n1;
    var n2;

    n1 = document.getElementById("numeroUno").value;
    n2 = document.getElementById("numeroDos").value;

    var resta = parseInt(n1) - parseInt(n2);

    alert("La resta de los dos numeros es: "+resta);

}

function multiplicar()
{ 
    var n1;
    var n2;

    n1 = document.getElementById("numeroUno").value;
    n2 = document.getElementById("numeroDos").value;

    var multiplicacion = parseInt(n1) * parseInt(n2);

    alert("La multiplicacion de los dos numeros es: "+multiplicacion);
}

function dividir()
{
    var n1;
    var n2;

    n1 = document.getElementById("numeroUno").value;
    n2 = document.getElementById("numeroDos").value;

    if(n2 == 0){
        alert("No se puede dividir por 0!");
        return;
    } else {

    var division = parseInt(n1) / parseInt(n2);

    	alert("La division de los dos numeros es: "+division);
    }
}

