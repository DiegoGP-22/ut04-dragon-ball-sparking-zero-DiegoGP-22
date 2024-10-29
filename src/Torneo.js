const simularBatalla = require('./simularBatalla');
const { esPotenciaDeDos } = require('./utils');

class Torneo {
  constructor(luchadores) {
    if (!esPotenciaDeDos(luchadores.length)) {
      throw new Error('El número de luchadores debe ser una potencia de 2.');
    }
    this.luchadores = luchadores;
  }

  iniciar() {
    let ronda = this.luchadores;
    while (ronda.length > 1) {
      ronda = this.simularRonda(ronda);
    }
    console.log(`El campeón del torneo es ${ronda[0].nombre}!`);
    return ronda[0];
  }

  simularRonda(luchadores) {
    console.log(`--- Ronda ${Math.log2(luchadores.length)} ---`);
    const ganadores = [];
    for (let i = 0; i < luchadores.length; i += 2) {
      const ganador = simularBatalla(luchadores[i], luchadores[i + 1]);
      ganadores.push(ganador);
    }
    return ganadores;
  }
}

module.exports = Torneo;
