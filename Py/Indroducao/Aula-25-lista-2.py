lista_a = [1, 2, 3]
lista_b = [4, 5, 6]
lista_c = lista_a + lista_b

lista_a.extend(lista_b)
print(lista_a)

'''
Cuidads com dados mutáveis

= - copiando valor (imutaveis)
= - aponta para o mesmo valor na memória (mutável)
'''
lista_1 = ['João', 'Victor']
lista_2 = lista_1 #referenciou o mesmo id da memoria
#lista_2 = lista_1.copy()

lista_1[0] = 'Qualquer cosia'
print(lista_2)