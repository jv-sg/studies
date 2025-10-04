contador = 0

while contador <=10:
    contador += 1
    print(contador)

print("Acabou")

'''
Repetições
While (enquanto)
Executa uma ação enquanto uma condição for verdadeira
Loop inifinito -> quando um código não tem fim
'''

contador = 0

while contador <=100:
    contador += 1
    print(contador)

    if contador == 6:
        print('Não vou mostrar o 6')
        continue

    if contador == 40:
        break

print("Acabou")

'''
Repetições dentro de repetições
executa uma ação enquanto uma condição for verdaderia
'''

qtd_linhas = 5
qtd_colunas = 5

linha = 1

while linha <= qtd_linhas:
    coluna = 1
    while coluna <= qtd_colunas:
        print(f'{linha=}, {coluna=}')
        coluna += 1
    linha += 1

print('acabou')

'''WHILE ELSE'''

string = 'valor qualquer'

i=0
while i < len(string):
    letra = string[i]

    if letra == ' ':
        break

    print(letra)
    i += 1

else:
    print('Não encontrei um espaço')

print('fora do while')