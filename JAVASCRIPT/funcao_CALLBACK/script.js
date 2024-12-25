
function tudo_certo(){
    document.write("Deu tudo certo!");
}

function deu_ruim(){
    document.write("Houve algum problema...");
}

function testar_call(id, tudo_certo, deu_ruim){

    if(id > 5){
        tudo_certo();
    }else{
        deu_ruim();
    }


}

testar_call(2,tudo_certo, deu_ruim)