const alunos = [
    {nome: 'João', nota: 10, bolsista: false},
    {nome: 'Maria', nota: 10, bolsista: true},
    {nome: 'William', nota: 10, bolsista: false},
    {nome: 'Pedro', nota: 10, bolsista: true}
]
console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)//resultado de todas as notas