function fibonacci(numTermos) {
    if (numTermos === 0) return [0];
    if (numTermos === 1) return [0, 1];
    let sequencia = [0, 1];
    for (let i = 2; i < numTermos; i++) {
        sequencia.push(sequencia[i - 1] + sequencia[i - 2]);
    }
    return sequencia;
}

let termos = parseInt(prompt("Digite o número de termos: "));
if (isNaN(termos) || termos < 0) {
    console.log("carácter invalido, insira um numero inteiro positivo.");
} else {
    let resultado = fibonacci(termos);
    console.log(resultado.join(", "));
}