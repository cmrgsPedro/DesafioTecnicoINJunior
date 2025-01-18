let frase = prompt("Digite uma frase: ").toLowerCase().replace(/ /g, "");
fraseIvertida = frase.split("").reverse().join("");
let ehPalindromo = frase === fraseIvertida

if (ehPalindromo) {
    console.log("É palíndromo");
} else {
    console.log("Não é palíndromo");
};
