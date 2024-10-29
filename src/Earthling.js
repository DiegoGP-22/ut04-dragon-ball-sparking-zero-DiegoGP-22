const Luchador = require('./Luchador');

class Earthling extends Luchador {
  constructor(nombre, velocidad, ataque, defensa) {
    super(nombre, velocidad, ataque, defensa);
    this.tecnicaUsada = false;
  }

  usarTecnicaEspecial() {
    if (!this.tecnicaUsada) {
      this.ataque *= 1.4;
      this.tecnicaUsada = true;
    }
  }
}

module.exports = Earthling;
