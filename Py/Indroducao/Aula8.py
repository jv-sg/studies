"""
Procedencia dos operadores
1. (n + n)
2. **
3. * / // %
4. + -
"""
conta_1 = 1 + 1 ** 5 + 5 #7
print(conta_1)

conta_2 = conta_1 = (1 + 1) ** (5 + 5) #1024
print(conta_2)

nome = "João Victor"
altura = 1.67
peso = 74
imc = peso / (altura * altura) #ou peso / altura ** 2

print('Olá ', nome, 'seu imc ideal é de ', imc)
#f-string - formatação de strings
linha_1 = f'{nome} tem {altura} de altura, pesa {peso} e o seu IMC ideal é de {imc:.2f}'
print(linha_1)