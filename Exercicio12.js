function encontrarElementoUnico(numeros) {
    let unico = 0;
    for (let i = 0; i < numeros.length; i++) {
        unico ^= numeros[i];
    }
    return unico;
}
console.log(encontrarElementoUnico([1, 2, 3, 2, 1, 3, 4]));