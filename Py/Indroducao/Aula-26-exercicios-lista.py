'''
Exercício
Exibir os índices da lista
0 Maria
1 Helena
2 Luiz
'''

lista = ['Maria', 'Helena', 'João']
lista.append('Luiz')

indices = range(len(lista))

for indice in indices:
    print(indice, lista[indice], type(lista[indice]))

'''
-----------------------------------------------------
Existe um metodo de adicionar um metodo de enumerador
automático
'''

lista_enumerada = enumerate(lista)

for item in lista_enumerada:
    print(item)

print('o que tem na lista enumerada: ', lista_enumerada)
#depois de se usar a consulta do enumerate, ele deixa de ter os valores

for item in enumerate(lista): #essa é a forma ideal de se usar o enumerate
    print(item)

#caso queira salvar os valores em uma variavel usar:
lista_enumerada = list(enumerate(lista)) #fazer a conversão em lista ou tupla