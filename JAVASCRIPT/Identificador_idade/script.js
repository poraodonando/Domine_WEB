

// Pedindo a idade do Usuário:

idade = prompt('Digite sua idade');

if(idade >=0 && idade < 15  ){
    document.write("Criança");

}else if(idade>=16 && idade < 30){
    document.write("Jovem");

} else if(idade >=30 && idade <60){
    document.write("Adulto");

} else{
    document.write("Velho");
}


