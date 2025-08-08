const escola = 'Cod3r';
console.log(escola.charAt(4)); // 'r'
console.log(escola.charAt(5)); // '' (empty string, index out of bounds)
console.log(escola.charCodeAt(3)); // 51 (ASCII code for '3
console.log(escola.indexOf('3')); // 3 (index of '3' in the string)
console.log(escola.substring(1)); // 'od3r' (substring from index 1 to end)
console.log(escola.substring(0, 3)); // 'Cod' (substring from index// 0 to 3, not including 3)
console.log('Escola '.concat(escola).concat('!')); // 'Escola Cod3r!'
console.log(escola.replace(3, 'e')); // 'Coder' (replace '3 // with 'e')
console.log(escola.replace(/\d/, 'e')); // 'Coder' (replace digit with 'e')
console.log(escola.replace(/\w/g, 'e')); // 'eeee' (replace all word characters with 'e')

console.log('Ana,Maria,Pedro'.split(',')); // ['Ana', 'Maria', 'Pedro'] - gera um array
console.log('Ana,Maria,Pedro'.split(/,/)); // ['Ana', 'Maria, 'Pedro']
console.log('Ana,Maria,Pedro'.split(/,| /g).join(' ')); // 'Ana Maria Pedro'
console.log('Ana,Maria,Pedro'.split(/,| /g).join('-')); // 'Ana-Maria-Pedro'
console.log('Ana,Maria,Pedro'.split(/,| /g).join('')); // 'AnaMariaPedro'