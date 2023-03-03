var alternativa;

function respondeA(){
    alternativa = 1;
    comparar();
}

function respondeB(){
    alternativa = 2;
    comparar();
}

function comparar(){
    let numeroResposta = geraNumeroResposta();
    if(alternativa == corretas[numeroResposta]){
        questao.removeChild(quest);
        opcaoA.removeChild(resp1);
        opcaoB.removeChild(resp2);
        voltarjogo();
        atualizarPlacar();
    }else pararJogo();
}

//Placar
const placar = $('#h1Score');
let cont = 0;
let placarFinal = 0;

function atualizarPlacar(){
    placar.html(cont);
    cont++;
    
    if(cont == 11){
        placarFinal = 11;
        zerou();
    }
}

function zerou(){
    telaZerou.style.opacity="1";
    telaZerou.style.zIndex="1";
    nuvem.style.animation="none";
    pilar.style.animation="none";
    bau.style.animation="none";
    mario.classList.remove("animacaoPular");
};