
numero_1 = prompt("Digite um número: ");

numero_2 = prompt("Digite outro numero: ");

operacao = prompt("Soma ou subtracao? ");


switch(operacao){
    case 'soma':
        soma(numero_1,numero_2)
        break;

    case 'subtracao':
        subtracao(numero_1,numero_2)
        break;

    default:
        document.write("Operação incorreta!")

}

//Funções

function soma(numero_1, numero_2){
    resultado = document.write(parseInt(numero_1) + parseInt(numero_2))
    return resultado;
}


function subtracao(numero_1,numero_2){
    resultado = document.write(parseInt(numero_1) - parseInt(numero_2))
    return resultado;
}
