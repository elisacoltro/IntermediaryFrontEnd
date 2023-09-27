//REDUCE
const numeros = [1, 2, 3, 4, 5];

// Exemplo 1: Somar todos os elementos do array
const soma = numeros.reduce(function (acumulador, numero) {
  return acumulador + numero;
}, 0);
console.log(soma); // Saída: 15 (1 + 2 + 3 + 4 + 5)

// Exemplo 2: Encontrar o maior número do array
const maiorNumero = numeros.reduce(function (acumulador, numero) {
  return Math.max(acumulador, numero);
});
console.log(maiorNumero); // Saída: 5 (maior número do array)

var ordinais = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;
for (var i = 0; i < ordinais.length; i++) {
  total += ordinais[i];
}
console.log(total);

totalreduce = ordinais.reduce(function (total, numero) {
  return total + numero;
}, 0);

console.log(totalreduce);
