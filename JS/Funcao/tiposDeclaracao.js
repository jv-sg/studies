//function declaretion - é chamada primeiro, então mesmo que haja código a cima usando essa function, ela funcionará
function soma(x, y){
    return x + y
}

//function expression
const sub = function (x, y){
    return x - y
}

//named function expression
const mult = function mult(x, y){
    return x * y
}