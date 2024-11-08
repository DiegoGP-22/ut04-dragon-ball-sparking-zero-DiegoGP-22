// Saiyan.js

const Luchador = require('./Luchador');

class Saiyan extends Luchador {
  constructor(nombre, velocidad, ataque, defensa) {
    super(nombre, velocidad, ataque, defensa);
    this.esSuperSaiyan = false;
  }

  transformar() { // Puede transformarse varias veces por combate
    if (!this.esSuperSaiyan) {
      console.log(`\t${this.nombre} se transformo en Super Saiyan!`);
      this.ataque *= 1.3;
      this.velocidad *= 1.5;
      this.defensa *= 1.1;
      this.esSuperSaiyan = true;
    }
  }

  revertirTransformacion() { // Puede perder su transformacion en cualquier momento
    if (this.esSuperSaiyan) {
      console.log(`\t${this.nombre} ha perdido su transformación.`);
      this.ataque /= 1.3;
      this.velocidad /= 1.5;
      this.defensa /= 1.1;
      this.esSuperSaiyan = false;
    }
  }
}

module.exports = Saiyan;  
