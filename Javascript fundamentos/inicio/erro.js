function tratarErroELancar(erro) {
    throw new Error('Meu deus oq q ta acontecendo')
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
//                        ↑ código pedindo atributo com nome em inglês
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Operação finalizada')
    }
}

const obj = { nome: 'Binho' }
//              ↑ variável recebendo atributo com nome em português
imprimirNomeGritado(obj)