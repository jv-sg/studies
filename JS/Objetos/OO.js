//CÓDIGO NÃO EXECUTAVEL!!

//Programação procedural
//ProcessingInstruction(val1, val2, val3)
//.....

//OO
/*objeto = {
    val1,
    val2,
    val3,
    processamento(){
        // ...
    }
}

objeto.processamento()// foco passa a ser o objeto*/

//1 abstração
//2 encapsulamento - nivel de capsulamento muda mas não precisa saber dos minimos detalhes
//3. Herança - reutilização de código

//ex:
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    falar() {
        console.log(`${this.nome} faz um barulho.`);
    }
}

class Cachorro extends Animal {
    falar() {
        console.log(`${this.nome} late.`);
    }
}

const animal = new Animal('Bicho');
animal.falar(); // Bicho faz um barulho.

const dog = new Cachorro('Rex');
dog.falar(); // Rex late.