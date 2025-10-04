'''
Listas em Python
Tipo list - multavel
Suporta vários valores de qualquer tipo
Conhecimentos reutilizaveis - índices e fatiamento
Métodos úteis: append, insert, pop, del, clear, extend, +
'''

#        +01234
#        -54321
string = 'ABCDE' # 5 caracteres (len)

#indice   0-----1------2----3----4
#indice   1    -2     -3    -4  -5
lista = [123, True, 'João', 1.2, []]

print(lista[2])
lista[-3] = 'Maria'
print(lista)

'''
Listas em Python
Métodos úteis:
Create, Read, Update e Delete
'''
lista2 = [10, 20, 30]
lista2[2] = 300
del lista2[2]
print(lista2)

lista2.append(50)
lista2.append(60)
lista2.append(70)
lista2.append(150)
lista2.pop() #se não passar o indice ele remove o ultimo
del lista2[-1] #deletou o ultimo item da lista
#lista2.clear() - limpa a lista
lista2.insert(0, 5) #o primeiro número é o indice e o segundo é o valor
print(lista2)