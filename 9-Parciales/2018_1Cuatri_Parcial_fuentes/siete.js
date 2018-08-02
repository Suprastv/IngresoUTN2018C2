function mostrar()
{

var nota;
var acumNotas = 0;
var cantVarones = 0;
var sexo;
var notaMinima;
var sexoNotaMinima;
var promedio;
var flag = 0;

for(i=1;i<=5;i++){


    nota = parseInt(prompt("Ingrese nota (0/10)"));

    while(nota < 0 || nota >10 || isNaN(nota)){
        nota = parseInt(prompt("Error de ingreso. Reingrese nota (0/10)"));  
    }

             
    sexo = prompt("Ingrese sexo (m/f)");

    while(sexo != "m" && sexo !="f"){
        sexo = prompt("Error de ingreso. Reingrese sexo (m/f)");
    }
    
    acumNotas = acumNotas + nota;

    if(nota < notaMinima || flag ==0){
        notaMinima = nota;
        sexoNotaMinima = sexo;

        flag=1;
    }

    if(sexo == "m" && nota>=6){
        cantVarones++;
    }

}

promedio = acumNotas / 5;

alert("Promedio de las notas totales: " + promedio + "\n La nota mas baja " + notaMinima + " sexo: " + sexoNotaMinima + "\n Cantidad de varones aprobados: " +cantVarones);

}
