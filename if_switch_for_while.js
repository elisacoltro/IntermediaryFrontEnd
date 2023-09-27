//IF

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

//SWITCH
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

for (let propriedade of carros) {
  console.log(propriedade.modelo);
}

//WHILE

var c = 1;
while (c <= 10) {
  console.log(c);
  c++;
}

var t = 1;

do {
  console.log(t); //isso sempre será executado pelo menos 1 vez
  t++;
} while (t < 8);
