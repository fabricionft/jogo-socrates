const pular = () =>{
    mario.classList.add("animacaoPular");

    setTimeout(() => {
        mario.classList.remove("animacaoPular");
    }, 1000);
}

function clicar(){
    pular();
}

document.addEventListener("keydown", pular);


function iniciarJogo(){
    nuvem.classList.add("animacaoNuvem");
    pilar.classList.add("animacaoPilar");
    bau.classList.add("animacaoBau")
    chao.classList.add("chaao");
    chao1.classList.add("chaao1");
    chao2.classList.add("chaao2");
    atualizarPlacar();
}

function pararJogo(){
    nuvem.style.animation="none";
    pilar.style.animation="none";
    bau.style.animation="none";
    mario.classList.remove("animacaoPular");
    telaPerdeu.style.opacity="1";
    telaPerdeu.style.zIndex="1";

    let txtPlacarFinal = document.createTextNode(placarFinal);
    scoreFinal.appendChild(txtPlacarFinal);
}

let verificar = setInterval(() => {
    const pilarPosition = pilar.offsetLeft;
    const marioPosition = mario.offsetTop;
    const bauPosition = bau.offsetLeft;

    if(pilarPosition <= 77 && pilarPosition > 30 && marioPosition >= 124){
        pilar.style.left = pilarPosition+"px";
        bau.style.left = bauPosition+"px";
        pararJogo();
        clearInterval(verificar);
    }

    if(bauPosition <= 100 && bauPosition > 30 && marioPosition >= 124){
        fazPergunta();
    }
}, 10);


let np = -1;
function geraNumeroPergunta(){
    np +=1;
    return np;
}

let nr = -1;
function geraNumeroResposta(){
    nr +=1;
    return nr;
}

let quest;
let resp1;
let resp2;
function fazPergunta(){
    let numeroPergunta = geraNumeroPergunta();
    quest = document.createTextNode(perguntas[numeroPergunta]);
    resp1 = document.createTextNode(respostaA[numeroPergunta]);
    resp2 = document.createTextNode(respostaB[numeroPergunta]);

    questao.appendChild(quest);
    opcaoA.appendChild(resp1);
    opcaoB.appendChild(resp2);
    
    pausar();
}

function pausar(){
    bau.classList.remove("animacaoBau")
}

function voltarjogo(){
    bau.classList.add("animacaoBau");
    pilar.classList.add("animacaoPilar");
}