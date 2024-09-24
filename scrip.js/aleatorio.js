const nomes = ["fantini", "nicolas", "sandro", "claudio", "elaine", "cleisson", "richard"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)