'''
Escopo de funcções em Python
Escopo significa o local onde aquele código pode atinfir.
Existe o escopo global e local.
O escopo global é o escopo onde todo o código é alcançavel.
O escopo local é o escopo onde apenas nomes do mesmo local
podem ser alcançados.
A palavra global faz uma variavel do escorpo externo
ser a mesma no escopo iterno.
'''
# pode definir o X fora da função antes da função
x = 1
def escopo():
#    global x chamou o X de fora da função
    x = 10

    def outra_funcao():
        x = 11
        y = 2
        print(x, y)

    outra_funcao()
    print(x)

#print(x) o X existe apenas dentro da função
print(x)
escopo()
print(x)