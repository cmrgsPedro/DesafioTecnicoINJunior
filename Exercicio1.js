let a = parseFloat(prompt("Digite o valor de a:"));
let b = parseFloat(prompt("Digite o valor de b:"));
let c = parseFloat(prompt("Digite o valor de c:"));

let delta = b ** 2 - 4 * a * c;
console.log("O discriminante é " + delta);

if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("raiz x1 é " + x1.toFixed(2) + " e raiz x2 é " + x2.toFixed(2));
} else if (delta === 0) {
    let x = -b / (2 * a);
    console.log("As raizes x1 e x2 são" + x.toFixed(2));
} else {
    console.log("Sem raízes reais");
}

