class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { //informa que essa classe terá propriedades/prototipo de outra classe
    constructor(sobrenome, profissao = 'Processor'){
        super(sobrenome)//chamando a classe avo
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log();
