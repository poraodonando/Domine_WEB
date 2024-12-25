
var nome = prompt("Digite seu nome:")


var altura = parseFloat(prompt("Sua altura em centimetros: ")/100)

 //altura = parseFloat(altura)/100;


var peso = parseFloat(prompt("Seu peso em Kg"))

var IMC = peso/(altura*altura);

var resultado;

if(IMC <16){
    resultado = ("Baixo peso muito grave");

}else if(IMC >16 && IMC <16.99){
    resultado = ("Baixo peso Grave");

}else if(IMC>=17 && IMC <=18.49){
    resultado =("Baixo peso");

}else if(IMC >=18.5 && IMC <=24.99){
    resultado = ("Peso Normal")

} else if(IMC >=25 && IMC <= 29.99){
    resultado = ("SObrepeso")

}else if(IMC >= 30 && IMC <=34.99){
    resultado = ("Obesidade grau I")

}else if(IMC>=35 && IMC <=39.99){
    resultado = ("Obesidade grau II")

}else{
    resultado =("Obesidade gau III")
}


document.write(nome +", possui índice de massa corporal igual a "+IMC+" sendo classificado como:"+ resultado)

