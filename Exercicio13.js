let time = [];

function adicionarJogador() {
    let jogador = {
        nome: prompt("Nome: ").toLowerCase(),
        idade: parseInt(prompt("Idade: ")),
        posicao: prompt("Posição: ").toLowerCase(),
        pontuacao: parseInt(prompt("Pontuação: "))
    };
    time.push(jogador);
}

function buscarPorPosicao() {
    let posicao = prompt("Digite a posição: ").toLowerCase();
    let filtrados = time.filter(j => j.posicao.toLowerCase() === posicao);
    if (filtrados.length) {
        filtrados.forEach(jogador => {
            console.log(`Nome: ${jogador.nome}, Idade: ${jogador.idade}, Posição: ${jogador.posicao}, Pontuação: ${jogador.pontuacao}`);
        });
    } else {
        console.log("Nenhum jogador encontrado.");
    }
}

function listarTime() {
    if (time.length === 0) {
        return console.log("Não há jogadores cadastrados.");
    } else {
        return console.log(time);
    }
}

function calcularPontuacaoMedia() {
    if (time.length === 0) {
        console.log("Não há jogadores cadastrados.");
        return 0;
    }
    let somaPontuacao = 0;
    for (let i = 0; i < time.length; i++) {
        somaPontuacao += time[i].pontuacao;
    }
    let media = somaPontuacao / time.length;
    return console.log("A pontuação média dos jogadores é: " + media.toFixed(2));
}

while (true) {
    let opcao = parseInt(prompt("1 - Adicionar jogador\n2 - Buscar por posição\n3 - Listar time\n4 - Calcular pontuação média\n5 - Sair\nOpção: "));
    if (opcao === 1) {
        adicionarJogador();
    } else if (opcao === 2) {
        buscarPorPosicao();
    } else if (opcao === 3) {
        listarTime();
    } else if (opcao === 4) {
        calcularPontuacaoMedia();
    } else if (opcao === 5) {
        break;
    }
}