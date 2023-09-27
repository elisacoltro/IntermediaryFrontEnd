//FILTER
const numeros = [1, 2, 3, 4];
const eventos = numeros.filter((item) => item % 2 === 0);
console.log(eventos);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function buscarNumerosPares(value) {
  if (value % 2 == 0) return value;
}

var numerosPares = numbers.filter(buscarNumerosPares);
console.log(numerosPares);

//quero todos os numero sdivisíveis por 3
var numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var resultado = numeros2.filter((item) => item % 3 == 0);
console.log(resultado);

//nomes que tenham a letra M
var nomes = [
  { nome: "Maria", idade: 37 },
  { nome: "Joana", idade: 40 },
  { nome: "Vitória", idade: 39 },
  { nome: "Marcelo", idade: 42 },
  { nome: "Marcos", idade: 37 },
  { nome: "Amber", idade: 40 },
];

var pessoas = nomes.filter(function (valor) {
  return valor.nome.length <= 5;
});
console.log(pessoas);

//Atividade
var produto = [
  { id: 1, descrição: "SmartPhone", categoria: "Eletrônico" },
  { id: 2, descrição: "Notebook", categoria: "Eletrônico" },
  { id: 3, descrição: "Tablet", categoria: "Eletrônico" },
  { id: 4, descrição: "Geladeira", categoria: "Eletrodoméstico" },
];
//como criar um array apenas com a categoria eletronico?

var eletronic = produto.filter(function (valor) {
  return valor.categoria == "Eletrônico";
});

console.log(eletronic);
