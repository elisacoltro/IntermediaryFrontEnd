//SPLICE
var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array2.splice(3, 2);
console.log(array2);

var nomes = ["Pedro", "Thiago", "João", "Luiz"];
var novos = nomes.splice(1, 1, "Matheus", "Alberto");

console.log(nomes, novos);

var pais = ["Brasil", "Argentina", "Paraguai", "Colombia"];
pais.unshift("Uruguai");
console.log(pais);

//Atividade

//Crie um Array com 5 nomes: Guilherme, Samuel, Manoel, David e João.
//Acrescente o nome Ramon
//Retire o ultimo elemento do array
//encontre a posição do samuel
//Trocar Manuel por Emanuel

var nomes = ["Guilherme", "Samuel", "Manuel", "David", "João"];
nomes.push("Ramon");
console.log(nomes);

nomes.pop();
console.log(nomes);

console.log(nomes.indexOf("Samuel"));

nomes.splice(2, 1, "Emanuel");
console.log(nomes);

array = [1, 2, 3, "hello world", 4.12, true];
newArray = array.slice(0, 3);
console.log(newArray);
console.log(array);

//STRING
titulo = "Dra.";
nome = "Beatriz Coltro";
nome_completo = titulo.concat(nome);
console.log(nome_completo);

//ARRAY
array1 = [1, 2, 3];
array2 = [4, 5, 6];
array3 = array1.concat(array2);
console.log(array3);
