//armazenando uma função em uma variável
const imprimirSoma = function(x, y) {
    return x + y;
}

imprimirSoma(2, 3);

//armazenando uma função arrow em uma variável
const soma = (x, y) => {
    return x + y;
}

console.log(soma(2, 3));

// retorno implícito em uma função arrow
const subtracao = (x, y) => x - y;
console.log(subtracao(5, 2));

const imprimir2 = a => console.log(a);
imprimir2('Legal!!!');
