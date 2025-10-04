# Sets - Conjuntos em Python (tipo set)
# Conjuntos são ensinados na matemática
# https://brasilescola.uol.com.br/matematica/conjunto.htm
# Representados graficamente pelo diagrama de Venn
# Sets em Python são mutáveis, porém aceitam apenas
# tipos imutáveis como valor interno.

# Criando um set
# set(iterável) ou {1, 2, 3}
# s1 = set('Luiz')
s1 = set()  # vazio
s1 = {'Luiz', 1, 2, 3}  # com dados

# Sets são eficientes para remover valores duplicados
# de iteráveis.
# - Não aceitam valores mutáveis;
# - Seus valores serão sempre únicos;
# - não tem índexes;
# - não garantem ordem;
# - são iteráveis (for, in, not in)
s2 = {1, 2, 3, 3, 3, 3, 3, 1, 2, 2}
print(s2)

print(3 not in s2)
for numero in s2:
    print(numero)
# Métodos úteis:
# add, update, clear, discard
s3 = set()
s3.add('João')
s3.update(('Olá mundo', 1, 2, 3))
#s3.clear()
s3.discard('Olá mundo')
print(s3)
# Operadores úteis:
# união | união (union) - Une
# intersecção & (intersection) - Itens presentes em ambos
# diferença - Itens presentes apenas no set da esquerda
# diferença simétrica ^ - Itens que não estão em ambos

s1 = {1, 2, 3}
s2 = {2, 3, 4}
s3 = s1 | s2
print(s3)
s3 = s1 & s2
print(s3)
s3 = s2 - s1
print(s3)
s3 = s2 ^ s1
print(s3)