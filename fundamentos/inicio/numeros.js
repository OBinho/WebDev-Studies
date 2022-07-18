const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))


const prova1 = 9.871
const prova2 = 6.871

const total = prova1 * peso1 + prova2 * peso2
const mediaDoAluno = total / (peso1 + peso2)

console.log(mediaDoAluno.toFixed(2))
console.log(mediaDoAluno.toString())
console.log(typeof mediaDoAluno)