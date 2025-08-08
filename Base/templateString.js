const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!'; // concatenação
const template = `
    Olá ${nome}!`; // template string
console.log(concatenacao, template);

// Expressões
console.log(`1 + 1 = ${1 + 1}`); // expressão dentro da interpolação, apenas o que está dentro do ${} é calculado
const up = texto => texto.toUpperCase();
const down = texto => texto.toLowerCase();
console.log(`Ei... ${up('cuidado')}!`); // chamada de função dentro
console.log(`Ei... ${down('CUIDADO')}!`); // chamada de função dentros