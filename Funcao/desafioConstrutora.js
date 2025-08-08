class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

function construirPessoa(nome = 'sem nome'){
    //this.nome permite acessar a variavel multiplas vezes, sem ele o acesso externo é perdido
    this.nome = nome
    this.falar = function(){
       console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new construirPessoa('João Victor')
p1.falar()