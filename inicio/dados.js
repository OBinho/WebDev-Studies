//adição de valores literais a variáveis para facilitar a compreensão do código:
let nome = 'Caneta';
let quantidade = 10;
let preco = 6.4;
let imposto = 1.5;
let precoFinal = preco + imposto;

console.log(nome);
console.log(quantidade);
console.log(preco);
console.log(imposto);
console.log(precoFinal);

let desconto = 0.4;
let precoComDesconto = precoFinal * (1 - desconto);

console.log('Valor com desconto:', precoComDesconto);