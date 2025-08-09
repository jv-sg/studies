//coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220;

console.log(produto);
delete produto.preco
delete produto['marca do produto']
console.log(produto);

const carro = {
    modelo: 'A4',
    marca: 'Audi',
    valor: 250000,
    proprietario: {
        nome: 'João',
        idade: 30,
        endereco: {
            logradouro: 'Rua X, Jardim X',
            numero: 111
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Maria',
        idade: 25
    }]
}
console.log(carro)
carro.proprietario.endereco.numero = 1000
console.log(carro)
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)