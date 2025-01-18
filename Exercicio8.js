function countBooksInCategory(categorias) {
    let contagem = {};
    for (let i = 0; i < categorias.length; i++) {
        let categoriaAtual = categorias[i];
        contagem[categoriaAtual.category] = categoriaAtual.books.length;
    }
    return contagem;
}
console.log(countBooksInCategory(booksByCategory));