const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]); // Acessa os elementos do array
console.log(valores[4]); // undefined, pois não existe o índice 4

valores[4] = 10; // Adiciona um novo elemento no índice 4
console.log(valores[4]); // Exibe o array atualizado

console.log(valores.length); // Exibe o tamanho do array
console.log(valores); // Exibe todo o array
valores.push({ id: 3 }, false, null, 'teste'); // Adiciona elementos de diferentes tipos
console.log(valores); // Exibe o array com os novos elementos
console.log(valores.pop()); // Remove e exibe o último elemento do array
console.log(valores); // Exibe o array após a remoção do último elemento
delete valores[0]; // Remove o elemento no índice 0
console.log(valores); // Exibe o array após a remoção do elemento no índice 0
console.log(typeof valores); // Exibe o tipo do array, que é 'object'
console.log(valores instanceof Array); // Verifica se valores é uma instância de Array
console.log(valores instanceof Object); // Verifica se valores é uma instância de Object
console.log(Array.isArray(valores)); // Verifica se valores é um array usando Array.is
