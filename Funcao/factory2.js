function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.9))
console.log(criarProduto('iPad', 5000))
console.log(criarProduto('Samssung Book', 4000.5))