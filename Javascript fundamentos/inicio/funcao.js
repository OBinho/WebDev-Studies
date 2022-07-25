//função sem retorno
function logSoma(a, b) {
    !a || !b
        ? console.log(`
    Erro!
        Um dos valores necessários não foi declarado.

        Valor de a: ${a}.
        Valor de b: ${b}.
    `)
        : console.log('Soma dos valores apresentados:' + (a + b))
}
logSoma(4, 6)
logSoma(3)

//função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 4))
console.log(soma(9))