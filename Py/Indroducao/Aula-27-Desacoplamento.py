'''
Introdução ao desempacotamento + tuples
'''

nomes = ['Maria', 'Helena', 'João']
nome1, nome2, nome3 = nomes #dessa maneira o py joga cada valor em uma variavel
print(nome2)

_, nome5, *resto = ['Carlos', 'Thalia', 'Alan'] #ou usa uma *_ para indicar que não será usado
print(nome5)

'''Tupla é uma lista imutável'''
nome_nao_alterave = 'Maria', 'Helena', 'João' #essa é a forma de delcara

'''
Pode apenas consultar
outra forma de criar tupla é criar a lista com () ex:
nomes_imutaveis = ('Maria', 'Helena', 'João')

também é possivel converter lista em tupla e tupla em lista

nome = tuple(nome)
nome = list(nome)
'''