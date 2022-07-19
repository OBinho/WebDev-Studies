let valor // declarando uma variavel não inicializada

console.log(valor)
// ↑ console retorna undefined pois a variável foi apresentada mas nunca
// recebeu nenhum valor

// console.log(valor2)
// ↑ neste caso o console retorna "is not defined" pois o a variável
// não foi nem apresentada

valor = null // definindo um valor nulo a variável
console.log(valor)
// O console agora retorna o valor nulo, sinalizando que essa variável
// não possui nenhuma informação tampouco aponta para algum objeto