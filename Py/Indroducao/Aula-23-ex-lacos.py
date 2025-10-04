palavra_secreta = 'carro'
letras_acertada = ''

while True:
   
    letra_digitada = input('informe a letra: ')

    if len(letra_digitada) > 1:
        print('Digite apenas 1 letra')
        continue

    if letra_digitada in palavra_secreta:
        letras_acertada += letra_digitada

    palavra_formada = ''

    for letras_secreta in palavra_secreta:
        if letras_secreta in letras_acertada:
            palavra_formada += letras_secreta
        else:
            palavra_formada += '*'
            
    print(palavra_formada)