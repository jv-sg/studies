'''
Introdução às funções (def) em Python
Funções são trechos de códigos usados para
replicar determinada ação ao longo do seu código.
Elas podem receber valores para parâmetros (argumentos)
E retornar um valor específico.
Por padrão, funções Python retornam None (nada).
'''

def Print():
    print('Várias1')
    print('Várias2')
    print('Várias3')
    print('Várias4')
    print('Várias5')
    print('Várias6')

Print()

def Print2(nome='Sem nome'):
    print(nome)

Print2('Olá mundo')
Print2()

def imprimir3(a, b, c):
    print(a, b, c)

imprimir3(2, 2, 2)