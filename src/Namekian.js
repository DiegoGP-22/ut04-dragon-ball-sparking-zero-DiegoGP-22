const Luchador = require('./Luchador');

class Namekian extends Luchador {
  constructor(nombre, velocidad, ataque, defensa) {
    super(nombre, velocidad, ataque, defensa);
    this.regenerado = false;
  }

  regenerarSalud() { //Regenera 1 vez 30 de vida cuando tiene menos del 50 %
    if (this.salud <50 && !this.regenerado){
      if (!this.regenerado) {
      console.log(`\t${this.nombre} regenera salud!`);
      this.salud += 30;
      this.regenerado = true;
      }
    }
  }
}

module.exports = Namekian;
