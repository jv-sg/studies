const pessoa ={
    saudacao : 'bom dia',

    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional vs OO

const falarDePessoa = pessoa.falar.bind(pessoa) //o binde garante o This aponte corretamente
falarDePessoa()