class Luchador {
  constructor(nombre, velocidad, ataque, defensa) {
    this.nombre = nombre;
    this.velocidad = velocidad;
    this.ataque = ataque;
    this.defensa = defensa;
    this.salud = 100;
  }

  atacar(oponente) {
    const esquiva = Math.random() < 0.2;
    if (esquiva) {
      return { daño: 0, mensaje: `${oponente.nombre} esquivó el ataque de ${this.nombre}!` };
    }

    let daño = this.ataque - oponente.defensa;
    if (daño < 0) daño = 0;
    oponente.recibirDanio(daño);
    return { daño, mensaje: `${this.nombre} ataca a ${oponente.nombre} y causa ${daño.toFixed(2)} de daño.` };
  }

  recibirDanio(dano) {
    this.salud = Math.max(0, this.salud - dano);
  }

  estaVivo() {
    return this.salud > 0;
  }
}

module.exports = Luchador;
