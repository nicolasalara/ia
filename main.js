const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado = "É responsável dar comida típica para animais em adoção?",
        Alternativas: [
            {
                texto: "Sim",
                afirmação: "Faz com que o animal não passe fome."
            },
            {
                texto: "Não",
                afirmação: "Faz mal ao animal e pode levar o mesmo à óbito."
            }
        ]
    },
    {
        enunciado = "Como o acompanhamento veterinário pode influenciar a saúde dos animais em desfiles culturais e como a coleta seletiva ajuda para a sustentabilidade desses eventos?",
        Alternativas: [
            {
                texto: "Pode ajudar",
                afirmação: "afirmação"
            }
        ]
    }
] 
    {
        enunciado = "É responsável praticar esportes com roupas indígenas?",
        Alternativas: [
            {
                texto: "Sim",
                afirmação: "Incentiva a cultura.."
            },
            {
                texto: "Não",
                afirmação: "É preconceituoso.."
            }
        ]
    }

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
