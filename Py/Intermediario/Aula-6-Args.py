'''
Args - Argumentos não nomeados
* - *args (empacotamento e desempacotamento)
'''
#lembre-se de desempacotamento
x, y, *resto = 1,2,3,4
print(x, y, resto)

#def soma(x, y):
#   return x + y

def soma(*args):
    total = 0
    print(args, type(args))#tuppla
    for numero in args:
        total = total + numero
    return total


somar = soma(1, 2, 3, 4, 5)
print(somar)

somar2 = soma(1,2,3,5,4,5,7,8,6,75,5)
print(somar2)

#desacoplando um tupla para enviar para uma função
numeros = 1,2,3,4,5,6,7,8,100
outra_soma = soma(*numeros)
print(outra_soma)

print(sum(numeros))