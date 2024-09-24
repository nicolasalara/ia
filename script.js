const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "voce tem interesse na area de t.i" ,
        alternativas: [
            {
               texto: "sim",
               afirmação: ["afirmação",
               "por facilidade",
               "por amor",
               "interesse tecnologico"           
            ]
            },
            {
                texto: "não",
                afirmação:[ "afirmação",
                "não gosto",
                "não tenho interesse",
                "nao vejo sentido na tecnologia"          
            ]
            }
        
    },
    {
        enunciado: "voce " ,
        alternativas: [
            {
               texto: "oppenheimer",
               afirmação: "afirmação"
            },
            {
                texto: "silvio santos",
                afirmação: "afirmação"
            }
        ]
    },
    { 
        enunciado: "oque é o V de vlan?" ,
    alternativas: [
        {
           texto: "virtual",
           afirmação: "afirmação"
        },
        {
            texto: "victor ferreira do amaral",
            afirmação: "afirmação"
        }
    ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
