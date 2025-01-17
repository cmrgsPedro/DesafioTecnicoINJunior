function verificarIdades(anos, anoAtual) {
    let resultados = [];
    for (let ano of anos) {
        let idade = anoAtual - ano;
        if (idade >= 18) {
            resultados.push("maior");
        } else {
            resultados.push("menor");
        }
    }
    for (let i = 0; i < resultados.length; i++) {
        console.log(`Pessoa ${i + 1}: `);
        if (resultados[i] === "maior") {
            console.log("Maior de idade");
        } else {
            console.log("Menor de idade");
        }
    }
    return resultados;
}

let anos = [2004, 1996, 2012];
let anoAtual = parseInt(prompt("Digite o ano atual: "));

if (isNaN(anoAtual) || anoAtual <= 0) {
    console.log("carácter invalido, insira um valor positivo maior que zero.");
} else {
    verificarIdades(anos, anoAtual);
}