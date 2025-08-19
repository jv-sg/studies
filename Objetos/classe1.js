class Lancamento {
    constructor(nome = 'Genérico', valor = 0){// vai ser chamado quando usr o new
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){//vai concaternar todos os elementos em um array
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 4500)
const contaDeLuz = new Lancamento('Luz', -100)

const contas = new CicloFinanceiro(6, 2025)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())