function Fatorial(numero) {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

do {
    let numero = parseInt(prompt("Digite um número inteiro positivo: "));
    if (isNaN(numero) || numero < 0) {
        console.log("carácter invalido, tente novamente com um valor positivo.");
    } else {
        let resultado = Fatorial(numero);
        console.log(`Fatorial de ${numero} é: ` + resultado);
    }
} while (prompt("Deseja calcular outro fatorial? (S/N): ").toLowerCase() === "s");
