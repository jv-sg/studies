const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} // versão antiga - ideal caso queira alterar o nome do objeto
const obj2 = {a, b, c} // versão atual não precisa fazer a passagem

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 ={}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    function1: function(){ // forma antiga de fazer uma função dentro de um objeto
        // ...
    },
    funcao2(){ // forma reduzida de criar uma função dentro de um objeto
        //...
    }
}