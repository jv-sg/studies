texto = 'Python'
novo_texto = ''
#para cada letra em literavel (variavel texto)
for letra in texto:
    novo_texto += f'*{letra}'
    print(letra)

print(novo_texto + '*')

'''
For + range
range -> range(start, stop, step)
'''
print('exemplo de 10')
numero = range(10)

for valor in numero:
    print(valor)

print('exemplo de 5, 10')
numero = range(5, 10)

for valor in numero:
    print(valor)

print('exemplo de 1, 10, 2')
numero = range(1, 10, 2)

for valor in numero:
    print(valor)