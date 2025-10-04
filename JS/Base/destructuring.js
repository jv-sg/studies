const pessoa = {
    nome: 'João',
    idade: 30,
    endereco: {
        logradouro: 'Rua A',
        numero: 123
    }
}

const { nome, idade } = pessoa; // Desestruturação de objeto
console.log(nome); // João
console.log(idade); // 30

const { nome: n, idade: i } = pessoa; // Renomeando variáveis
console.log(n); // João
console.log(i); // 30

const { sobrenome, bemHumorado = true } = pessoa; // Atributo inexistente com valor padrão
console.log(sobrenome); // undefined
console.log(bemHumorado); // true

const { endereco: { logradouro, numero, cep } } = pessoa; // Desestruturação aninhada
console.log(logradouro, numero, cep); // Rua A
