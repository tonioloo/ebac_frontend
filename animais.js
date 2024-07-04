function Animal (nome) {
  this.nome = nome;
}

function Cachorro(nome, idade, raça) {
  Animal.call(this, nome)
  this.idade = idade;
  this.raça = raça;

  this.fazerSom = function() {
    console.log(`${this.nome} está latindo`)
  }
}

function Gato(nome, idade, raça) {
  Animal.call(this, nome)
  this.idade = idade;
  this.raça = raça;
  
  this.fazerSom = function() {
    console.log(`${this.nome} está miando`)
  }
}

function Vaca(nome, idade, raça) {
  Animal.call(this, nome)
  this.idade = idade;
  this.raça = raça;
  
  this.fazerSom = function() {
    console.log(`${this.nome} está mugindo`)
  }
}

const cachorro = new Cachorro('Maltus', 5, 'Pitbull');
const gato = new Gato('Garfield', 3, 'Manchado');
const vaca = new Vaca('Curió', 4, 'Nelore');

cachorro.fazerSom();
gato.fazerSom();  
vaca.fazerSom(); 