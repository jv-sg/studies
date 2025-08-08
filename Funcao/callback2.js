const notas = [7, 1, 5, 8, 9, 2, 10]

//sem callback
let notasBaixas = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//com callback
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)

const notaBaixas3 = notas.filter(nota => nota < 7)
console.log(notaBaixas3)