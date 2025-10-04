'''
Exercícios com funções
Crie uma função que multiplica todos os argumentos
#não noeados recebido
retone o total para uma variável e mostre o valor
da variável

Crie uma função false se número é par ou ímpar
Retorne se o número é par ou ímpar.
'''

def multiNum(*numeros):
    total = 1
    for result in numeros:
        total = total * result

    def parImpar(numeroAva):
        resultado = numeroAva % 2 == 0
        if resultado:
            return 'Numero par'
        return 'Numero impar'
        
    moeda = parImpar(total)
    return f'valor total é de {total} e o numero é {moeda}'

resultado = multiNum(1, 3)
print(resultado)