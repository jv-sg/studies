'''
Argumentos nomeados e não nomeados em funções Python
Argumentos nomeado tem nome com dinal de igual
Argumentos não nomeados recebe apenas o argumentos (valor)
'''
#definição
def soma(x, y):
    print(f'{x=} + y={y}', '|', 'x + y = ', x+y)

soma(1, 2)
soma(y=2, x=1)