//map serve para gerar um novo array - tranformar um array em outro, mantendo o mesmo tamanho do array
const nums = [1, 2, 3, 4, 5]

//for com proposito
let resultado = nums.map(function(e){//pode receber 3 parametros o proprio valor atual, indice e array completo
return e*2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)