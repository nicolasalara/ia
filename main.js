const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como a música de um artista pode promover o respeito e a conscientização sobre a inclusão e a caça ilegal que leva à extinção de animais?" ,
        alternativas: [
            {
               texto: "Ele  pode abordar os tópicos em suas composições assim “educando” quem escutar a música.",
               afirmação: "afirmação"
            },
            {
                texto: "O artista tentando abordar todos esses tópicos, pode diluir a mensagem fazendo com que nenhum do tópicos recebam atenção e a missão principal da música, falhe.",
                afirmação: "afirmação"
            }
        ]
    },
    {
        enunciado: "A acessibilidade, a diversidade musical e o crescimento urbano desenfreado impactam a inclusão social e a preservação de espécie ameaçadas?" ,
        alternativas: [
            {
               texto: "A cultura dos povos indígenas é rica e caracteriza-se pela intensa relação com a natureza.A questão da procriação é natural e vista como comum",
               afirmação: "afirmação"
            },
            {
                texto: "Apoiam as medidas já tomadas.",
                afirmação: "afirmação"
            }
        ]
    },
    { 
        enunciado: "A tecnologia assistiva está sendo aplicada para promover inclusão, a música como instrumento de conscientização e a luta contra o desmatamento para evitar a extinção de animais?" ,
    alternativas: [
        {
           texto: "Uso das redes sociais para apoio e divulgação das ações.",
           afirmação: "afirmação"
        },
        {
            texto: "Não",
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
