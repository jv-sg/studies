'''
# Operadores lógicos
# and (e) or (ou) not (não)
# and - todas as condições precisam ser verdadeiras.
Se qualquer valor for falso, a expressão inteira será avaliada naquele valor
'''
entrada = input('[E]entrar [S]air: ')
senha = input('senha: ')
senha_permitida = '123'
if (entrada == 'E' or entrada == 'e') and senha == senha_permitida:
    print('Entrou')

else:
    print('saiu')

nome = 'João'
print('ã' in nome)
print('-' *10)
print(not False)
print(not True)