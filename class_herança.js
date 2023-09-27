//CLASSES

class pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}
let pessoas1 = new pessoa("João", 30);
let pessoas2 = new pessoa("Maria", 25);

pessoas1.saudacao(); // Saída: "Olá, meu nome é João e tenho 30 anos."
pessoas2.saudacao(); // Saída: "Olá, meu nome é Maria e tenho 25 anos."

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    console.log(this.firstName + " " + this.lastName);
  }
}

const user = new User("Elisa", "Pires Coltro");
user.getFullName();

//getter e setter

class Pessoa {
  constructor(nome, idade) {
    this._nome = nome;
    this._idade = idade;
  }

  get nome() {
    return this._nome;
  }

  set nome(novoNome) {
    this._nome = novoNome;
  }

  get idade() {
    return this._idade;
  }

  set idade(novaIdade) {
    if (novaIdade >= 0) {
      this._idade = novaIdade;
    }
  }
}

let pessoa1 = new Pessoa("João", 30);

pessoa1.nome = "Maria"; // Define o nome usando o setter
pessoa1.idade = -5; // Tenta definir uma idade inválida (não será atribuída)

console.log(pessoa1.nome); // Saída: "Maria" (valor alterado pelo setter)
console.log(pessoa1.idade); // Saída: 30 (idade não foi alterada, pois é inválida)

class candidato {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    console.log("Olá " + this.nome + " " + this.sobrenome);
  }
}
candidato1 = new candidato("Gustavo", "Cavallini");
candidato1.nomeCompleto;

//HERANÇA
class dispositivo {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }
  ligar() {
    if (this.ligado) {
      console.log("Já está ligado!");
      return;
    }
    this.ligado = true;
  }
}

class SmartPhone extends dispositivo {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

var v3 = new SmartPhone("Motorola", "Pink", "V3");
console.log(v3);
v3.ligar();
v3.ligar();

// Classe Pai
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`${this.nome} faz barulho.`);
  }
}

// Classe Filha (herda de Animal)
class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome); // Chama o construtor da classe pai usando o super()
    this.raca = raca;
  }

  latir() {
    console.log(`${this.nome} (${this.raca}) está latindo.`);
  }
}

let cachorro = new Cachorro("Bobby", "Labrador");
cachorro.falar(); // Saída: "Bobby faz barulho."
cachorro.latir(); // Saída: "Bobby (Labrador) está latindo."

class carro {
  constructor(nome, ano) {
    this.nome = nome;
    this.ano = ano;
  }
  periodo() {
    let data = new data();
    return data.getFullYear() - this.ano;
  }
}
