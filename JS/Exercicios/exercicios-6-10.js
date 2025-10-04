//Elabore duas funções que recebam três parametros
function regimeJurosSimples (capitalInicial = 0, taxaJuros, tempoAplica = 0){
    return capitalInicial + (capitalInicial * taxaJuros * tempoAplica)
}

function regimeJurosComposto (capitalInicial = 0, taxaJuros, tempoAplica = 0){
    return capitalInicial * (1 + taxaJuros) ^ tempoAplica
}

console.log(regimeJurosSimples(5, 8, 12))
console.log(regimeJurosComposto(5, 8, 12))