const pessoa = {
    nome: 'Ana',
    idade: 26,
    endereco: {
        logradouro: 'Rua Sei lá eu',
        número: 69
    }
}

// desestruturando o objeto pessoa e retirando as informações solicitadas
const { nome, idade } = pessoa
console.log(nome, idade)
// mesma técnica usada pra retirar informações de route das navegações em aplicativos
// .... só que agora eu sei oq q to fazendo :)

const { nome: n, idade: i} = pessoa
console.log(n, i)
// retirando as informações da mesma forma porém,
// dessa vez armazendando as mesmas em variáveis novas ("n" e "i")