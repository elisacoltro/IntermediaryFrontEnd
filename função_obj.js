//FUNÇÃO
function soma(a, b) {
  return a + b;
}

let resultado = soma(5, 3); // Chama a função "soma" com os argumentos 5 e 3
console.log(resultado); // Imprime o resultado, que será 8

//USANDO VARIAVEIS COMO ARGUMENTOS
let num1 = 10;
let num2 = 7;
let resultado_ = soma(num1, num2); // Chama a função "soma" com as variAveis "num1" e "num2"
console.log(resultado_); // Imprime o resultado, que será 17a

//FUNÇÃO SEM PARAMETRO
function saudacao() {
  return "Olá, tudo bem?";
}

let mensagem = saudacao();
console.log(mensagem); // Imprime a mensagem "Olá, tudo bem?"

//FUNÇÕES AULA MAO NA MASSA
function multiplicar(a, b) {
  return a * b;
}
var x = multiplicar(14, 23);
console.log(x);

function funcao(a, b = 2, c = 4) {
  console.log(a + b + c);
}
funcao(2); //não preciso colocar mais valores além do correspondente ao a pq la na declaração da função eu ja dei valores para b e c

// quando eu nao sei a quantidade de argumentos da minha função
function teste(...args) {
  console.log(args);
}
teste(2, 6, 5, 8, 9, 7);

//OBJETO

var pessoa = {
  nome: "Luiz",
  sobrenome: "Otavio",
};

console.log(pessoa["sobrenome"]);

var pessoa1 = new Object();
(pessoa1.nome = "Angela"), (pessoa1.sobrenome = "Silva");
pessoa1.falarNome = function () {
  console.log("Nome é: " + this.nome);
};
pessoa1.falarNome();

function criarPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}

var p1 = criarPessoa("Lucas", "Silva");
var p2 = criarPessoa("Arthut", "Almeida");
var p3 = criarPessoa("Pedro", "Souza");

console.log(p1, p2, p3);
