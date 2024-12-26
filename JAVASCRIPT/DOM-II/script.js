
function distribui_caractere(){
    // selecionar o valor digitado
    var caractere = document.getElementById('texto_digitado').value;

    

    //Limar o o campo de digitação
    document.getElementById('texto_digitado').value = ''
    

    //Limpar espaços em branco
    caractere.trim()

    switch(caractere){
        case '0' :
        case '1' :
        case '2' :
        case '3' :
        case '4' :
        case '5' :
        case '6' :
        case '7' :
        case '8' :
        case '9' :
            //Adiciona o carater no campo números
            document.getElementById('so_numeros').value += caractere
            break;
        
        default:

        //adiciona o caracter no campo letras    
            document.getElementById('so_letras').value += caractere       
        
    }

    // bloco para escrever todos os caracteres digitados
    document.getElementById('caractere_digiditado').value +=caractere

}