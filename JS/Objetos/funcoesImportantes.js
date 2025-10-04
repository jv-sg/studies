const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13.5
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2009'
})

pessoa.dataNascimento = '01/02/2000'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assing (ECAScript 2015)
const destino = { a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(destino, o1, o2)

console.log(obj)

Object.freeze(obj)// deixando objeto estático
obj.a = 1234
console.log(obj)