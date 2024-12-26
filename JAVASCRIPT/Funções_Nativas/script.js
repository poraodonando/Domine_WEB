//Funções Nativas para Strings

var nome = "-  Nando Batista  - "
document.write("<h1> <b>" + nome.length + "</b></h2>");

document.write(nome.charAt()+ "<br>");

document.write(nome.indexOf("t") + "<br>");

document.write(nome.replace("Batista", "W.F.") + "<br>");

document.write(nome.substring(2,8) + "<br>")

document.write(nome.toUpperCase() + "<br>")

document.write(nome.trim() + "<br> <hr> <hr>")


//Funções Nativas para matemáticas

var numero_x = 10.380
var numero_y = 2

var alea = Math.random()*100

document.write(Math.ceil(numero_x) + "<br>");


document.write(Math.floor(numero_x) + "<br>")

document.write(Math.round(numero_x) + "<br>");

document.write(Math.ceil(alea) + "<br> <hr><hr>");

//Funções NAtivas Para Manipular datas

//Precisa ser Instanciada
var data = new Date();

var data_atual = data.getDate()
var hora_atual = data.getHours()
var minuto_atual = data.getMinutes()


document.write(data_atual + "<br>");
document.write(hora_atual +" : "+ minuto_atual+ "<br>");

document.write(data.toString()+"<br>");

data.setDate(data.getDate()+35);

document.write(data.toString()+"<br>");


//calculo entre duas datas




