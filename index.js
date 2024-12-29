class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome; 
      this.idade = idade; 
      this.tipo = tipo; 
    }
  
    atacar() {
      let ataque;
      switch (this.tipo.toLowerCase()) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "realizou um ataque genérico";
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  
  let heroi1 = new Heroi("David", 19, "Guerreiro");
  let heroi2 = new Heroi("Anna", 25, "Mago");
  
  heroi1.atacar(); 
  heroi2.atacar();
  