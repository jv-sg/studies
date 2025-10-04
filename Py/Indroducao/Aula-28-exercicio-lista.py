'''
Faça uma lista de compras com listas
O usuário deve ter a possibilidade de
Inserir, apagar e listar valores da sua lista
Não permita que o programa quebe com
erros de índices inexistentes na lista
'''

lista_de_compras = []
print('Vamos as compras :-)')

while True:
    opcao = input('[I]nserir item a lista [A]pagar item [L]istar\n')

    #Opção de listar
    if opcao == 'L' or opcao == 'l':
        for i, valor in enumerate(lista_de_compras):
            print(i, valor)

    #Opção de deletar
    elif opcao == 'A' or opcao == 'a':
        print(lista_de_compras)

        try:
            deletar = input('Informe o ID do item da lista a qual deseja deletar ')
            indice_del = int(deletar)
            lista_de_compras.pop(indice_del)
        except TypeError:
            print('Erro, não há itens')

     #Opção de adicionar
    elif opcao == 'I' or opcao == 'i':

        item = input('Informe o novo item ')
        lista_de_compras.append(item)

    else:
        print('Escolha as opções I, L ou A')