const prod1 = {}
prod1.nome = 'Celular Ultra Mega' // Cuidado com atributos com espaço
prod1.preco = 4998.90 // Atributos com ponto são válidos, mas não é recomendado
console.log(prod1);

prod1['Desconto Legal'] = 0.40 // Atributos com espaço devem ser acessados com colchetes (evitar atribustos com espaço)
console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj2: {
            blabla: 1,
            obj3: {
                obj4: {
                    obj5: {
                        obj6: {
                            obj7: {
                                obj8: {
                                    obj9: {
                                        obj10: 'obj10'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}