import decimal
'''
Caso precise de um número muito preciso, usar esse Decimal
'''
numero_1 = decimal.Decimal(0.1) #numero_1 = 0.1
numero_2 = decimal.Decimal(0.7)
numero_3 = numero_1 + numero_2
print(numero_3)
print(f'{numero_3:.2f}')
print(round(numero_3, 2))