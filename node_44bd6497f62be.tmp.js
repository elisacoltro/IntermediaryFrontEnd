/*INTRODUÇÃO À VARIÁVEIS 27/07

console.log("Olá!");
var a = 10;
b = 20;
total = a + b;
console.log(total);

var nomePessoa = "Elisa";
console.log(nomePessoa);
NOMEPESSOA = "VANESSA";
console.log(NOMEPESSOA);
console.log(NOMEPESSOA == nomePessoa);

var var1 = 1;
console.log(var1);
var5 = 5;
console.log(var5);
//se você vai atribuir valor, usa o var, se não vai atribuir valor, usa o let.
let book;
book = 10;
book = 20;
console.log(book);

const valor1 = 100

console.log(valor1);
*/

//TIPOS DE DADOS E OPERADORES 27/07

/*var n = null;
console.log(typeof n);

var nome = "Elisa";
console.log(nome.toUpperCase());
*/

/*Operadores
a = 5 + 4;
b = a - 3;
c = a * b;
d = c / 4.5;
e = d % 5;
n = 3;
n = n * 10;

a = 3;
a *= 10;

console.log(n, a);*/

/*var x = 10;
x++;
console.log(x);

n = 3;
x = 10;
b = 20;
c = 60;

console.log(n <= x && b != c);
console.log(c < n && x < b);
console.log(c == b || n != x);
console.log(x >= c || b == n);
console.log(c > b && x != n);
console.log(!(c > b && x != n));
*/
/*
//Verificar se a é maior que b e b é divisível por 2;
console.log(a > b && b % 2 == 0);

//Verificar se b é maior igual a a ou b dividido por 2 o resultado é 2;
console.log(a <= b || b / 2 == 2);

//Verificarse a é maior que b e b é maior igual a 5;
console.log(a > b && 5 <= b);

//Verificar se b é par ou impar usando ternario;
resultado = b % 2 == 0 ? "par" : "impar";
*/

//RESOLVENDO PROBLEMAS COM OPERADORES

/*x = 5;
y = 5;

console.log((total = x + y));
console.log(x == y);
if (x != y);
{
  console.log("x é igual a y");
}


x = 10;
y = 2;

console.log((z = 10 % 2));
console.log(10 % 2 == 0);
resultado = 10 % 2 == 0 ? "par" : "ímpar";
console.log(resultado);


a = 5;
b = 8;
c = 14;
d = 67;
e = "5";

console.log(a == e);
console.log(a === e);
console.log(a > c || d > c);
console.log(a > c && d > c);
if (a !== e) {
  console.log("a é um numero, e é uma string");
}


x = 7;
y = 14;
z = 3.5;

console.log(y > x && z < x);
console.log(z <= 7 / 2 || y == 4 * z);
if (y * z == x * x) {
  console.log("14*3.5 = 7*7" );
} 
else{
    console.log("socorro")}
 */

//Escreva um algoritmo para ler o salario mensal atual d eum funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.

/*salario = 1500;
reajuste = 15 / 100;
aumento = salario * reajuste;
console.log(salario, reajuste, aumento);

novoSalario = salario + aumento;
console.log("O funcionario receberá: " + novoSalario);
*/

//Faça um algorimo que leia um numero inteiro e que imprima o seu sucesor e antecessor
/*
a = 10;
antecessor = ++a;
console.log(sucessor);


a = 10;
antecessor = --a;
console.log(antecessor);


var numero = 10;
var antecessor;
var sucessor;

antecessor = numero - 1;
sucessor = numero + 1;

console.log("o numero antecessor é: " + antecessor);
console.log("o numero sucessor é: " + sucessor);


//O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem dop distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escreva um algoritmo para ler o cust de fábrica de um carro, calcular e escever o custo final ao consumidor

var custoFabrica = 60000;
var distribuidor;
var impostos;
var custoFinal;

distribuidor = custoFabrica * (28 / 100);
impostos = custoFabrica * (45 / 100);

custoFinal = custoFabrica + distribuidor + impostos;
console.log("o custofinal ao consumidor é de: " + custoFinal);


//Faça um algoritmo que leia 3 notas de um aluno , calcule e escreva a media final. Considerar que a média é ponderada e que o peso das notas é 2,3 e 5.

var mediafinal;
n1 = 5.0;
n2 = 9.0;
n3 = 4.0;

mediafinal = (n1 * 2 + n2 * 3 + n3 * 5) / 10;
console.log("A média final do aluno é: " + mediafinal);
if (mediafinal >= 7.0) {
  console.log("O aluno foi aprovado!");
} else {
  console.log("O aluno foi reprovado.");
}


//Faça um lgoritmo que leia 4 números informados pelo usuário e que depois imprima a média ponderada, sabendo que os pesos são respectivamente: 1, 2, 4 e 4

valor1 = 8;
valor2 = 3;
valor3 = 4;
valor4 = 1;

mediapond = (valor1 * 1 + valor2 * 2 + valor3 * 3 + valor4 * 4) / 10;

console.log("A média ponderada entre os valores informados é :" + mediapond);


//Para fazer uma promoção os comerciantes estão procurando aumentar suas vendas oferecendo descontos. Faça um algoritmo que possa receber o valor de um produto e que escreva o novo valor tendo em vista que o desconto fooi de 9%.

produto = 100;
desconto = 9 / 100;
economia = produto * desconto;

valorfinal = produto - economia;

console.log(
  "O valor do produto com desconto é de: " + valorfinal,
  "Você economizou " + economia
);


//Faça um algoritmo que efetue o cálculo da quantidade de litros de combustivel gastos em uma viagem, sabendo que o carro faz 12km com um lito. Deverão ser fornecidos o tempo gasto na viagem e a velocidade média.
//OAlgoritmo deverá apresentar os valores de velocidade média, tempo gasto na viagem, distância percorrida e a quantidade de litros utilizados na viagem.

var velocidadeMedia;
var tempo;
var distancia;
var litros;

tempo = 8;
velocidadeMedia = 95;

distancia = tempo * velocidadeMedia;
litros = distancia / 12;
console.log("A distancia percorrida nessa viagem é de: " + distancia + " km.");
console.log("O tempo gasto na viagem foi de " + tempo + " horas.");
console.log(
  "A velocidade média dessa viagem foi de " + velocidadeMedia + "km/h."
);
console.log("O consumo de cobustível foi de " + litros + " litros.");

*/

//STRING
/*
console.log("minha " + "string");

var minhaString = "alfa";
minhaString += "beto";

console.log(minhaString);


var nome = "Marcelo da Silva";
var x = nome.length;
console.log(x);

resultado = x > 15 ? "obrigada!" : "Por favor digite seu nome completo";

console.log(resultado);

var caixaAlta = nome.toLocaleUpperCase();
console.log(caixaAlta);

var jogo = "Barcelona vs Real Madrid";
var posicao = jogo.indexOf("Real");
console.log(posicao);

var cortado = jogo.slice(0, 5);
console.log(cortado);

var cortado_2 = jogo.slice(13);
console.log(cortado_2);


var jogo = "Barcelona vs Real Madrid";
var ProcuraPalavra = jogo.includes("Real");
console.log(ProcuraPalavra);

var str1 = "hello ";
var str2 = "mai friend";
var str3;

str3 = str1 + str2;
console.log(str3);

var frase = "         Olá! voce está aprendendo javaScript";
console.log(frase.trim());

var num = "1,2,3,4,5,6,7,8,9";
var arr = num.split(",");
console.log(arr);


if (true) {
  var x = 5;
}
console.log(x);


var idade = 14;
if (idade >= 18) {
  console.log("Pode dirigir.");
} else {
  console.log("Não pode dirigir.");
}


var livro = "economia";

if (livro == "história") {
  console.log("Livro de história");
} else if (livro == "economia") {
  console.log("Livro de economia");
} else if (livro == "desconhecido") {
  console.log("Livro desconhecido");
} else if (livro == "matemática") {
  console.log("Livro de matemática");
}

//iNSTRUÇÃO IF

var pais = "Brasil";

if (pais != "Brasil") {
  console.log("Você é estrangeiro.");
} else {
  console.log("Você é brasileiro!");
}

var idade = 24;

if (idade < 16) {
  console.log("Não vota");
} else if (idade < 18 || idade > 65) {
  console.log("Voto opcional");
} else {
  console.log("Voto obrigatório!");
}


//instrução switch
var destino = "Campos do Jordão";

switch (destino) {
  case "Maceió":
    console.log("Vamos para Maceió!");
    break;
  case "Rio de Janeiro":
    console.log("Vamos para Rio de Janeiro!");
    break;
  case "Gramado":
    console.log("Vamos para Gramado!");
    break;
  case "Campos do Jordão":
    console.log("Vamos para Campos do Jordão!");
    break;
  default:
    console.log("Seu destino não foi encontrado.");
}

//INSTRUÇÕES FOR

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

const pessoa = {
  nome: "João",
  idade: 30,
  profissao: "Engenheiro",
};

for (const chave in pessoa) {
  console.log(chave + ": " + pessoa[chave]);
}

const numeros = [1, 2, 3, 4, 5];

for (const numero of numeros) {
  console.log(numero);
}

var carros = {
  modelo: "Audio A3",
  marca: "Audi",
  ano: 2020,
};

for (let caracteristica in carros) {
  console.log(caracteristica + ": " + carros[caracteristica]);
}

var carros = [
  { modelo: "Audio A3", marca: "Audi", ano: 2020 },
  { modelo: "Vectra", marca: "Chevrolet", ano: 2011 },
  { modelo: "Polo", marca: "Volkswagem", ano: 2023 },
];

for (let caracteristica in carros) {
  console.log(carros[caracteristica]);
}
*/

//WHILE

let contador = 1;

while (contador <= 5) {
  console.log(contador);
  contador++;
}

let contador2 = 4;

do {
  console.log(contador2);
  contador2++;
} while ((contador2 = 5));
