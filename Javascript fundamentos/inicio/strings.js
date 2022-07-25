const nome = 'Binho'

console.log(nome.charAt(4))
console.log(nome.charAt(5))
console.log(nome.charCodeAt(3))

console.log(nome.substring(1))
console.log(nome.substring(0, 3))

console.log('Sou nome, '.concat(nome).concat('!'))
console.log(nome.replace('h', 'g'))

console.log('Ana,Maria,Pedro,Cleber'.split(','))

// template string:

const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
        ${nome}!`

console.log(concatenacao + template)

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)

const quemSao = true

console.log(
    'Os verdadeiros: ' + (quemSao ? 'eu sei quem são' : 'sei não brou')
)