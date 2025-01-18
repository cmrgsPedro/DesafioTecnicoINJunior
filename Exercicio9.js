function authors(categorias) {
    let autores = [];
    for (let categoria of categorias) {
        for (let livro of categoria.books) {
            if (!autores.includes(livro.author)) {
                autores.push(livro.author);
            }
        }
    }
    return autores;
}
console.log(authors(booksByCategory));