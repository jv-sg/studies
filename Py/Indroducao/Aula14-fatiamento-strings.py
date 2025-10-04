'''
Fatiamento de strings
012345678
Olá mundo
-987654321
Fatiamento [i:f:p] [::]
obs.: a função len retorna a qtd de caracteres da str
'''

variavel = 'Olá mundo'
print(variavel[4:8])
print(variavel[0:9:2])
print(variavel[::-1])
print(len(variavel))

'''
Exercício
Pela ao usuário o nome e idade
se nome idade forem digitados:
    Exiba:
        Seu nom é {nome}
        Seu nome invertido é {nome invertido}
        Seu nome contém (ou não) espaços
        Seu nome tem {n} letras
        A primeira letra do seu nome é {letra}
Se nada for digitado em nome ou idade:
    Desculpe, você deixou campos vazios.
'''

nome = input('Qual o seu nome?')
idade = input('qual a sua idade?')

if nome and idade:
    print(f'Seu nome é {nome}')
    print(f'Seu nome invertido é {nome[::-1]}')
    if ' ' in nome:
        print("Seu nome contém espaços")
    else:
        print("Seu nome não contém espaço")

    print(f'A primeira letra do seu nome é {nome[0]}')
    print(f'Seu nome tem {len(nome)} de letras')
    print(f'a última letra é {nome[-1]}')

else:
    print('você esqueceu de preencher todos os campos')