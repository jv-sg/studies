//sempre que precisar fazer um filtro usar essa função
const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "iPad", preco: 2000, fragil: true},
    {nome: "Copo de plastico", preco: 3.5, fragil: false},
    {nome: "Brinquedo", preco: 45.00, fragil: false},
    {nome: "Copo de vidro", preco: 145.00, fragil: true}
]

console.log(produtos.filter(function(p){
    return p.preco > 10 && p.fragil === true
}))

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil //por ser uma variavel booleana não precisa fazer a comparação "=="

console.log(produtos.filter(caro).filter(fragil))