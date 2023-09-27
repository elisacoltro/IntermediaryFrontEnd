//FOREACH

var food = ["bread", "rice", "meat", "pizza"];

food.forEach(function (food) {
  console.log(food);
});

food.forEach((food) => console.log(food));

var a = [10, 20, 30, 40, 50, 60];

for (let valor of a) {
  console.log(valor);
}

a.forEach((a) => console.log(a));

var total_a = 0;
a.forEach((valor) => {
  total_a += valor;
});

console.log(total_a);

a.forEach(function (valor, indice, array) {
  console.log(array[indice]);
});

var nomes = [
  { nome: "Maria", idade: 37 },
  { nome: "Joana", idade: 40 },
  { nome: "Vitória", idade: 39 },
  { nome: "Marcelo", idade: 42 },
  { nome: "Marcos", idade: 37 },
  { nome: "Amber", idade: 40 },
];

nomes.forEach((nomes) => console.log(nomes));
