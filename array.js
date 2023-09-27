//ARRAY

var valores = [8, 1, 7, 2, 9];
console.log(valores[0]); //para acessar cada valor do meu array - retorno = 8
console.log(valores[3]); // retorno = 2

for (var pos = 0; pos < valores.length; pos++) {
  console.log("Posição " + pos + ": " + valores[pos]);
}

soma = 0;

for (var pos = 0; pos < valores.length; pos++) {
  console.log((soma += valores[pos]));
}

console.log(soma);

var media = soma / valores.length;
console.log(media);

var carros = [];
carros[0] = "Volvo";
carros[1] = "Jeep";
carros[2] = "BMW";
carros[3] = "Fiat";
carros[4] = "Ford";

console.log(carros);
console.log(carros.length);

console.log(carros.shift()); //Removes the first element from an array and returns it

console.log(carros.pop()); //Removes the last element from an array and returns it.

console.log(carros.unshift("Porshe")); //Inserts new elements at the start of an array, and returns the new length of the array.
console.log(carros);

console.log(carros.push("Ferrari")); //Appends new elements to the end of an array, and returns the new length of the array.
console.log(carros);

//Localizar o maior valor dentro de um array de numeros

arr1 = [
  4, 5, 8, 96, 2, 4, 7, 5, 56, 6, 8, 58, 4, 5, 63, 8, 78, 75, 57, 36, 573, 52,
  37, 27, 5, 76, 78, 3, 75, 64, 2,
];

arr1.sort((a, b) => a - b);
console.log(arr1);
console.log(arr1.length);
console.log(arr1.slice(30));

console.log(arr1.join("|"));

var valores = [8, 14, 54, 32, 9, 7, 1, 7, 2, 9];

//arrayInvertido = valores.reverse();
//console.log(arrayInvertido);

console.log("Posição do numero 1: " + valores.indexOf(1));
