//parte 1
//por padrão usamos [[]] para referenciar objeto pai
//Estudo sobre prototype
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype) //todo objeto por padrão herda do prototype
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) // o prototipo do prototype aponta para null

function MeuObjeto() {}
    console.log(typeof Object, typeof MeuObjeto)
    console.log(Object.prototype, MeuObjeto.prototype)

    //parte 2
    //cadeia de protóripos (prototype chain)
    Object.prototype.attr0 = '0' //Não é recomendado
    const avo = {attr1: 'A'}
    const pai = {__proto__: avo, attr2: 'B'}
    const filho = {__proto__: pai, attr3: 'C'}

    console.log(filho.attr1, filho.attr2, filho.attr3)

    const carro = {
        velAtual: 0,
        velMax: 200,
        acelerarMais(delta){
            if(this.velAtual + delta <= this.velMax){
                this.velAtual += delta
            }else{
                this.velAtual = this.velMax
            }
        },
        status(){
            return `${this.velAtual}Km/h de ${this.velMax}Km/h`
        }
    }

    const ferrari2 = {
        modelo: 'spider',
        velMax: 324 //shadowing
    }

    const volvo2 = {
        modelo: 'V40',
        status(){
            return `${this.modelo}: ${super.status()}`
        }
    }

    Object.setPrototypeOf(ferrari2, carro)
    Object.setPrototypeOf(volvo2, carro)

    console.log(ferrari2)
    console.log(volvo2)

    volvo2.acelerarMais(100)
    console.log(volvo2.status())

    ferrari2.acelerarMais(200)
    console.log(ferrari2.status())