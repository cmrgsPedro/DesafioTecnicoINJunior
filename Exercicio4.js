let reais = parseFloat(prompt("Digite o valor em reais: "));

if (isNaN(reais) || reais < 0) {
    console.log("carácter invalido, insira um valor positivo.");
} else {
    let euro = reais / 6.1;
    let dolar = reais / 5.7;
    console.log("R$" + reais + "\n€" + euro.toFixed(2) + "\n$" + dolar.toFixed(2));
}