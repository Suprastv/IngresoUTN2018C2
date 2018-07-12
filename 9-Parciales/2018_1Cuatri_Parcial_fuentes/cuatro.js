function mostrar()
{
var n1;
var n2;
n1 = parseInt(prompt("Ingrese el primer numero"));
n2 = parseInt(prompt("Ingrese el segundo numero"));

if(n1 == n2)
{

    alert("Numero 1: " + n1 + " Numero 2: "+ n2);

}
else if(n1 > n2)
{
    alert(n1-n2);
}
else if(n1+n2 > 10)
{
    alert("La suma es: "+ parseInt(n1+n2) + " y supero el 10.");
}
else
{
    alert(n1+n2);
}
}
