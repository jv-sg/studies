'''
CPF: 746.824.890-70
Colete a soma dos 9 primeiros dígitos do CPF
Multiplicando cada um dos valores por uma
contagem regressiva começando de 10

Ex: 746.824.890-70 (74682489070)
    10  9  8  7  6  5  4  3  2
    7   4  6  8  2  4  8  9  0
    70  36 48 56 12 20 32 27 0

Somar todos os resultados:
70+36+48+56+12+20+32+27+0 = 301
Multiplicar o resultado anterior por 10
301*10 = 3010
Obter o resto da divisão da conta anterior por 11
3010 % 11 = 7
Se o resultado anterior for maior que 9:
    Resultado é 0
Contrário disso: 
    Resultado é o valor da conta

O priemrio dígito do CPF é 7
'''

cpf_original = '746.824.890-70'.replace('.', '').replace('-', '')
nove_digitos = cpf_original[:9]
contador_regressivo = 10

resultado = 0
for digito in nove_digitos:
    resultado += int(digito) * contador_regressivo
    contador_regressivo -= 1

digito1 = (resultado * 10) % 11
digito1 = digito1 if digito1 <= 9 else 0
print(digito1)

dez_digitos = nove_digitos + str(digito1)
contador_regressivo2 = 11

resultado_digito_2 = 0
for digito in dez_digitos:
    resultado_digito_2 += int(digito) * contador_regressivo2
    contador_regressivo2 -= 1

digito2 = (resultado_digito_2 * 10) % 11
digito2 = digito2 if digito2 <= 9 else 0
print(nove_digitos, digito1, digito2)