'''
Faça um programa que peça ao usuário para digitar um número inteiro,
informe se esteve número é par ou ímpar, caso o usuário não digite um número
inteiro, informe que não é um número inteiro.
'''
numero1 = input('Me informe o primeiro número inteiro ')

if numero1.isdigit():
    entrada_int = int(numero1)
    resultado = entrada_int % 2 == 0
    par_impar = 'ímpar'

    if resultado:
        par_impar = 'par'

    print(f'Valor digitado {numero1} é {par_impar}')

else:
    print('Você não digitou um número inteiro')




'''
Faça um programa que pergunte a hora ao usuário e, baseando-se no horáro descrito,
exiba a saudação apropriada. ex. Boma dia 0-11, Boa tarde 12-17 e Boa noite 18-23
'''
horas = int(input('Olá, que horas são? '))
#int(horas)

if horas >= 0 and horas <= 11:
    print("Muito bom dia")
elif horas >= 12 and horas <= 17:
    print("Muito boa tarde")
else:
    print('Boa noite')
'''
Faça um programa que peça o primeiro nome do usuário. Se o nome tiver 4 letras ou
menos escreva "Seu nome é curto"; se estiver entre 5 e 6 letras, escreva "Seu nome
é normal", maior que 6 escreve "Seu nome é muito longo"
'''

nome = input('Qual o seu nome?')

if len(nome) <= 4:
    print('nome curto')
elif len(nome) >= 5 and len(nome) <= 6:
    print('nome normal')
else:
    print('nome longo')