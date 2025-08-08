function getPreco(imposto = 0.1, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 5000,
    desc: 0.15,
    getPreco
}
//------------------
global.preco = 20
global.desc = 0.1
//------Apenas para chamar no geral------
console.log(getPreco())

console.log(produto.getPreco())

//-----------------------

const carro = {preco: 4999, desc: 0.29}

//duferencia apenas a forma de passar o paremtro
//no call passa diretamente nos parametros do call cada um dos parametros: o priemiro parametro é o contexto e o restante são os parametros
console.log (getPreco.call(carro))
console.log (getPreco.call(carro, 0.17, '$'))

//aplay usa array, não se passa diretamente igual o call, o primeiro parametro é o objeto de contexto de execução e depois todos os parametros como array
console.log(getPreco.apply(carro))
console.log(getPreco.apply(carro, [0.17, '$']))