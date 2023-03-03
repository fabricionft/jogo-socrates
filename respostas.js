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
    var numeroResposta = geraNumeroResposta();
    if(alternativa == corretas[numeroResposta]){
        questao.removeChild(quest);
        opcaoA.removeChild(resp1);
        opcaoB.removeChild(resp2);
        voltarjogo();
        atualizarPlacar();
    }else{
        pararJogo();
    }
}

//Placar
const placar = document.getElementById("h1Score");

var txt0 = document.createTextNode("0");
var txt1 = document.createTextNode("1");
var txt2 = document.createTextNode("2");
var txt3 = document.createTextNode("3");
var txt4 = document.createTextNode("4");
var txt5 = document.createTextNode("5");
var txt6 = document.createTextNode("6");
var txt7 = document.createTextNode("7");
var txt8 = document.createTextNode("8");
var txt9 = document.createTextNode("9");
var txt10 = document.createTextNode("10");
var txt11 = document.createTextNode("11");


function iniciarPlacar(){
    placar.appendChild(txt0);
}

var cont = 0;
var placarFinal = 0;
function atualizarPlacar(){
    cont+=1;
    if(cont == 1){
        placar.removeChild(txt0);
        placar.appendChild(txt1);
        placarFinal = 1;
    }if(cont == 2){
        placar.removeChild(txt1);
        placar.appendChild(txt2);
        placarFinal = 2;
    }if(cont == 3){
        placar.removeChild(txt2);
        placar.appendChild(txt3);
        placarFinal = 3;
    }if(cont == 4){
        placar.removeChild(txt3);
        placar.appendChild(txt4);
        placarFinal = 4;
    }if(cont == 5){
        placar.removeChild(txt4);
        placar.appendChild(txt5);
        placarFinal = 5;
    }if(cont == 6){
        placar.removeChild(txt5);
        placar.appendChild(txt6);
        placarFinal = 6;
    }if(cont == 7){
        placar.removeChild(txt6);
        placar.appendChild(txt7);
        placarFinal = 7;
    }if(cont == 8){
        placar.removeChild(txt7);
        placar.appendChild(txt8);
        placarFinal = 8;
    }if(cont == 9){
        placar.removeChild(txt8);
        placar.appendChild(txt9);
        placarFinal = 9;
    }if(cont == 10){
        placar.removeChild(txt9);
        placar.appendChild(txt10);
        placarFinal = 10;
    }if(cont == 11){
        placar.removeChild(txt10);
        placar.appendChild(txt11);
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