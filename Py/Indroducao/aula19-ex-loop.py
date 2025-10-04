'''
Inteirando string com while
'''
nome = 'João Victor'

Novonome= ''
letra_atual = 0
while len(nome) != letra_atual:
    print(f'{nome[letra_atual]}' + '*')
    Novonome += nome[letra_atual] + '*'
    letra_atual += 1

print(f'Seu nome ficou {Novonome}')

'''Calculadora com While'''
while True:
    sair = input('Deseja sair? [s]im ').lower().startswith('s')
    print(sair)
    if sair:
        break
    
    else:
        print('Digite + para somar \n' \
        '- para subtrair\n' \
        '/ para dividir\n' \
        '** para potenciação')
        opcao = input('Qual tipo de operação deseja realizar? ')
        operadores = '/**+-'
        
        if opcao not in operadores:
            print('opção inválida')
            continue
        

        numero_1 = input('informe o primeiro número ')
        numero_2 = input('informe o segundo número' )
        numeros_validos = True
        try:
            numero_1 = float(numero_1)
            numero_2 = float(numero_2)
            numeros_validos = True
        except:
            numeros_validos = None

        if numeros_validos is None:
            print('um dos números não são válidos')
            continue

        
        if opcao == '+':
            print('--------Vamos somar--------')
            resultado = numero_1 + numero_2
            print(f'O resultado é de {resultado}')
            continue

        elif opcao == '-':
            print('--------Vamos subtrair--------')
            resultado = numero_1 - numero_2
            print(f'O resultado é de {resultado}')
            continue

        elif opcao == '/':
            print('--------Vamos dividir--------')
            resultado = numero_1 / numero_2
            print(f'O resultado é de {resultado}')
            continue

        elif opcao == '**':
            print('--------Vamos potencializar--------')
            resultado = numero_1 ** numero_2
            print(f'O resultado é de {resultado}')
            continue

print("fim dos calculos")