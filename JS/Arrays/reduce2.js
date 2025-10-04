const alunos = [
    {nome: 'João', nota: 10, bolsista: false},
    {nome: 'Maria', nota: 10, bolsista: true},
    {nome: 'William', nota: 10, bolsista: false},
    {nome: 'Pedro', nota: 10, bolsista: true}
]

//desafio 1: todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Desafio 2: Algum aluno é bolsista?
const algumBolsistea = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistea))