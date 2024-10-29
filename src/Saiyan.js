const Luchador = require('./Luchador');

class Saiyan extends Luchador {
  constructor(nombre, velocidad, ataque, defensa) {
    super(nombre, velocidad, ataque, defensa);
    this.esSuperSaiyan = false;
  }

  transformar() {
    if (!this.esSuperSaiyan) {
      this.ataque *= 1.5;
      this.velocidad *= 1.3;
      this.defensa *= 1.2;
      this.esSuperSaiyan = true;
    }
  }

  revertirTransformacion() {
    if (this.esSuperSaiyan) {
      this.ataque /= 1.5;
      this.velocidad /= 1.3;
      this.defensa /= 1.2;
      this.esSuperSaiyan = false;
    }
  }
}

module.exports = Saiyan;
