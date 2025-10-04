const obj = {a: 1, b: 2, c: 3, soma(){ return a+b+c } }
console.log(JSON.stringify(obj)) //textual, por isso o soma não foi adicionado

//console.log(JSON.parse("{a: 1, b: 2, c: 3}")) - jeito incorreto
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1, "b": "String", "c": true, "d": {}, "e": []}'))