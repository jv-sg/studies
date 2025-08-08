function soma() {
    let soma = 0;
    for(i in arguments){ // a variavel Arguments existe em todas as funcções, e pode ser acessado mesmo que não existam parametros
        soma += arguments[i];
    }
    return soma
}

console.log(soma())
console.log(soma(2, 3, 4))
console.log(1.1)
console.log(2, 4, "teste")
console.log("teste1 ", "teste 2")