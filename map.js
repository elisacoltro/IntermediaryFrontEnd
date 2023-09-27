//MAP

const numeros = [1, 2, 3, 4, 5];

// Exemplo 1: Multiplicar cada número por 2
const dobrados = numeros.map(function (numero) {
  return numero * 2;
});
console.log(dobrados); // Saída: [2, 4, 6, 8, 10]

// Exemplo 2: Criar um novo array com os quadrados de cada número
const quadrados = numeros.map(function (numero) {
  return numero * numero;
});
console.log(quadrados); // Saída: [1, 4, 9, 16, 25]

var div2 = numeros.map(function (number, numeros) {
  return number / 2;
});

console.log(div2);

var menos2 = numeros.map(function (element, numeros) {
  return element - 2;
});

console.log(menos2);

var numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var num = numeros2.map(function (valor) {
  return valor * 0.5;
});

console.log(num);

var nomes = [
  { nome: "Maria", idade: 37 },
  { nome: "Joana", idade: 40 },
  { nome: "Vitória", idade: 39 },
  { nome: "Marcelo", idade: 42 },
  { nome: "Marcos", idade: 37 },
  { nome: "Amber", idade: 40 },
];

var funcionarios = nomes.map((value) => value.nome);
console.log(funcionarios);
