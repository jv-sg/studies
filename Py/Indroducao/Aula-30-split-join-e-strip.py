'''
Split e join com list e str
split - divide uma string
join - une uma string
'''

frase = 'Olha só que, coisa interessante'
lista_palavras = frase.split()
print(lista_palavras)

lista_palavras = frase.split(',')
print(lista_palavras)

lista_frases = []
for i, frase in enumerate(lista_palavras):
    lista_frases.append(lista_palavras[i].strip())

frases_unidas = '-'.join(lista_frases)
print(frases_unidas)