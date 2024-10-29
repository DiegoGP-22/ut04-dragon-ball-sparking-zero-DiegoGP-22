const Luchador = require('./Luchador');

class Namekian extends Luchador {
  constructor(nombre, velocidad, ataque, defensa) {
    super(nombre, velocidad, ataque, defensa);
    this.regenerado = false;
  }

  regenerarSalud() {
    if (!this.regenerado && this.salud < 50) {
      this.salud += 30;
      this.regenerado = true;
    }
  }
}

module.exports = Namekian;
