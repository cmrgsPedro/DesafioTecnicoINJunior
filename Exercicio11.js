let quantidade = parseInt(prompt("Quantos números deseja inserir?\n"));
let numeros = [];
for (let i = 0; i < quantidade; i++) {
    numeros.push(parseInt(prompt("Digite um número: ")));
}
let contador = 0;
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeros[i - 1]) {
        contador++;
    }
}
console.log("Qtd de numeros em ordem crescente = " + contador);