let fila = ["João", "Maria"];
while (true) {
    console.log("Clientes na fila:");
    for (let i = 0; i < fila.length; i++) {
        console.log((i + 1) + "o " + fila[i]);
    }
    let opcao = parseInt(prompt("\n1 - Novo Cliente\n2 - Atender Cliente\n3 - Sair\n"));
    if (opcao === 1) {
        fila.push(prompt("Digite o nome do cliente: "));
    } else if (opcao === 2) {
        console.log(`Atendendo: ${fila.shift()}`);
    } else if (opcao === 3) {
        break;
    }
}