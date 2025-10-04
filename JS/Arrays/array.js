console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' //forma direta de inserir dado, usado apenas caso queira atualziar alguma info
aprovados.push('Abia') //Forma mais usual de adicionar um novo elemento, adiciona sem pre na ultima posição
console.log(aprovados.length)

aprovados[9] = 'Rafael' //a linguagem vai aceitar mas vai criar vários elementos dentro do array do tipo undefinite
console.log(aprovados.length)
aprovados[8] === undefined

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento 1') //vai no elemento 1 excluir 2 itens e adicionar o Elemento 1
console.log(aprovados)