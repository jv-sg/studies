let isAtivo = false // literal falso
isAtivo = true // literal verdadeiro

isAtivo = 1 // número, mas é considerado verdadeiro
console.log(!!isAtivo) // converte para booleano, !! é uma forma de converter para booleano
isAtivo = 0 // número, mas é considerado falso

console.log("verdadeiros");

console.log(!!3) // número, mas é considerado verdadeiro
console.log(!!-1) // número, mas é considerado verdadeiro
console.log(!!' ') // string com espaço, mas é considerada verdadeira
console.log(!!'texto') // string com texto, mas é considerada verdadeira
console.log(!![]) // array vazio, mas é considerado verdadeiro
console.log(!!{}) // objeto vazio, mas é considerado verdadeiro
console.log(!!Infinity) // infinito, mas é considerado verdadeiro
console.log(!!(isAtivo = true)) // atribuição de valor, mas é considerado verdadeiro

console.log("falsos");
console.log(!!0) // número zero, é considerado falso
console.log(!!'') // string vazia, é considerada falsa
console.log(!!null) // null, é considerado falso
console.log(!!undefined) // undefined, é considerado falso
console.log(!!NaN) // NaN (Not a Number), é considerado falso
console.log("para finalizar");
console.log(!!(isAtivo = false)) // atribuição de valor falso, é considerado falso

let nome = '';
console.log(nome || 'Desconhecido') // operador lógico OR, se nome for falso
// retorna 'Desconhecido', caso contrário retorna o valor de nome