const sequencia = {
    _valor: 1, //convenção apenas para sinalizar que essa variavel será privada
    get valor(){ return this._valor++},// a vantagem de usar esses metodos é ter uma validação antes de fazer um retorno
    set valor(valor) {
        if(valor > this._valor){
        this._valor = valor
        } else{
            return console.log("Não é possivel remover valores")
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor)

sequencia.valor = 900
console.log(sequencia.valor)