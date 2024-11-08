const Luchador = require('./Luchador');

class Earthling extends Luchador {
  constructor(nombre, velocidad, ataque, defensa) {
    super(nombre, velocidad, ataque, defensa);
    this.tecnicaUsada = false;
  }

  // La tecnica amplifica el daño del siguiente golpe
  usarTecnicaEspecial() {
    if (!this.tecnicaUsada) {
      console.log(`\t${this.nombre} usa su técnica especial!`);
      this.ataque *= 1.5;
      this.tecnicaUsada = true;
    }
  }
  // Pierde la bonificacion despues del golpe aunque falle
  finTecnicaEspecial() {
    if (this.tecnicaUsada) {
      this.ataque /= 1.5;
    }
  }
}

module.exports = Earthling;
