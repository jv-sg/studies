function soma1(a, b, c){ // não é o melhor metodo pois caso você tente somar 0, ele vai considerar o valor padrão
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log(soma1())
console.log(soma1(3))
console.log(soma1(2, 3, 4))
console.log(soma1(0, 0, 0)) // não tem como obter resultado pois cai na condição OU

//estrategias 2, 3 e 4 para gerar valor padrao
function soma2(a, b, c){
    a = a !== undefined ? a : 1; //verifica se não é um Undefined, se for recebe 1 e se não for recebe o valor de A
    b = 1 in arguments ? b : 1; //verifica se no argumento 1 existe algum valor, se não recebe 1 e se sim recebe B
    c = isNaN(c) ? 1 : c //verifica se o valor é um número, se for recebe C e se não recebe 1
    return a + b + c;
}

console.log(soma2())
console.log(soma2(3))
console.log(soma2(2, 3, 4))
console.log(soma2(0, 0, 0))

//valor padrão es2025 e mais indicada
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3())
console.log(soma3(3))
console.log(soma3(2, 3, 4))
console.log(soma3(0, 0, 0))