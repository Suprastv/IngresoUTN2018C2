function mostrar()
{

var numero = prompt("Ingrese un numero");
var cantPares= 0;

for(i=1 ;i<=numero ;i++ ){

    if(i % 2 == 0){
        
        console.log(i);
        cantPares++;
    }

}
console.log("Cantidad de pares: " + cantPares);

}//FIN DE LA FUNCIÓN