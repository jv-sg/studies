//atividade 1 - crie uma função que dado dois valores (passados via parametros) mostre no console a soma, subtração, multiplicação e divisão desses valores.
function operacoes (valor1 = 0, valor2 = 0) {
    console.log(`Soma ${valor1 + valor2}`);
    console.log(`Subtração ${valor1 - valor2}`);
    console.log(`Multiplicação ${valor1 * valor2}`);
    console.log(`Divisão ${valor1 / valor2}`);
}

operacoes(2, 5);

//atividade 2 - Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes. Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo)

function queTrianguloEesse(lado1 = 1, lado2 = 1, lado3 = 1){
    if(lado1 === lado2 && lado2 === lado3){
        return console.log('A geometria trata-se de um EQUILÁTERO');
    }
    else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
        return console.log('A geometria trata-se de um ISÓSCELES');
    }
    else{
        return console.log('A geometria trata-se de um ESCALENO');
    }
}

queTrianguloEesse(5, 5, 5)

queTrianguloEesse(5, 1, 5)
queTrianguloEesse(5, 5, 1)
queTrianguloEesse(1, 5, 5)

queTrianguloEesse(5, 4, 3)

// Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente
function elevadoAoExpoente(base = 0, expoente = 1){
 return console.log (base ** expoente)
}

elevadoAoExpoente (5, 3)

//Crie uma função que recebe dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.
function restoEoperacao (dividendo = 1, divisor = 1){
    console.log(`Resultado: ${Math.floor(dividendo / divisor)}`);
    console.log(`Resto: ${dividendo % divisor}`);
}

restoEoperacao(10, 2)

//Lida com números em javascript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o seguinte comando no console: console.log(0.1 + 0.2); O resultado será 0.300000000004. Outra coisa importante de observar, é o fato que o ponto é utlizado no lugar da vírgula e vice versa. Com isso, vamos fazer um exercicio simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para que ela receba um valor como 0.3000000004 e retorne R$0,30 (observe a virgula e o ponto)
dinheiro = (valorDecimal) => {
    resultado = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    return console.log(resultado)
}

dinheiro(0.1 + 0.2)