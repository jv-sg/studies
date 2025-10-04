'''
Interpolação básica de strings
s - string
d e i -int
f - float
x e X -Hexadecimal (ABCDEF012345678900)
'''

nome = 'João'
preco = 1000.95897643
variavel = '%s, o preço é R$%.2f' % (nome, preco)

print(variavel)
print('O hexadecimal de %d é %08X' % (1500, 1500))
print('-' *100)
'''
formatação básica de strings - também funciona com a f Format
s - string
d - int
f - float
.<número de dífitos>f
x ou X - Hexadecimal
(Caractere)(><^)(quantidade)
> - Esquerda
< - Direita
^ - Centro
= força o numero aparecer depois do zero
Sinal - + ou -
Ex.: 0>100, .1f
Conversion flags - !r !s !a
'''

variavel = 'ABC'
print(f'{variavel}')
print(f'{variavel: >10}')
print(f'{variavel: <10}.')
print(f'{variavel: ^10}.')
print(f'{10000.485454852:,.1f} ')
print(f'{10000.485454852:0=+10,.1f} ')