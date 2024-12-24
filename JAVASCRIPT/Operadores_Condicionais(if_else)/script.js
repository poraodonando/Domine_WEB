
if(4>5){
    alert("Ola");
    document.write("<h1>"+"Tudo bem ?"+"</h1>")
} else{
    alert("alo!");

}

if(4 !== "4"){
    document.write("Os numeros são iguais <br>")
}else{
    document.write("OS numeros são diferentes <br>")
}

// Verificador de média

var nota1 = parseInt( prompt("Digite 1º Nota"));
var nota2 = parseInt( prompt("Digite 2º Nota"));
var nota3 = parseInt( prompt("Digite 3º Nota"));

var media = (nota1 + nota2 + nota3)/3;



if(media >= "6"){
    document.write("Aprovado. Media: "+media);
}else{
    document.write("Reprovado. Media: "+ media);
}
