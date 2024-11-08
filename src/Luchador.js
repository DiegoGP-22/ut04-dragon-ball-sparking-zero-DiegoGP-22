class Luchador {
  constructor(nombre, ataque, velocidad, defensa) {
    this.nombre = nombre;
    this.ataque = ataque;
    this.velocidad = velocidad;
    this.defensa = defensa;
    this.salud = 100;
  }

  atacar(oponente) {
    const esquiva = Math.random() < 0.2; // 20% probabilidad de esquivar
    if (esquiva) {
      return { daño: 0, mensaje: `\t${oponente.nombre} esquivó el ataque de ${this.nombre}!` };
    }; 
    let daño = this.ataque - oponente.defensa;
    if (daño < 1){ // Si hace menos de 1 de daño, daño random entre 3 y 7 
      daño = Math.random() * (7 - 3) + 5;
    };
    oponente.recibirDanio(daño);
    return { daño, mensaje: `\t${this.nombre} ataca a ${oponente.nombre} y causa ${daño.toFixed(2)} de daño.` };
  }

  recibirDanio(dano) {
    this.salud = Math.max(0, this.salud - dano);
  }

  estaVivo() {
    return this.salud > 0;
  }
}

module.exports = Luchador;
