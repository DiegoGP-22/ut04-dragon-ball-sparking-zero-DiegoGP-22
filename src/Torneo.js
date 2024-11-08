const { esPotenciaDeDos } = require('./utils'); 
const simularBatalla = require('./simularBatalla');

class Torneo {
  constructor(luchadores) {
    if (!esPotenciaDeDos(luchadores.length)) { 
      throw new Error('El número de luchadores debe ser una potencia de 2.');
    }
    this.luchadores = luchadores;
  }

  iniciar() {
    let ronda = this.luchadores;
    let contadorRonda = 1; 
    while (ronda.length > 1) {
      console.log(`\n\t· Ronda ${contadorRonda} `);
      ronda = this.simularRonda(ronda);
      contadorRonda++;
    }
    return ronda[0];
  }

  simularRonda(luchadores) {
    const ganadores = [];
    // Combates de 2 en 2
    for (let i = 0; i < luchadores.length; i += 2) {
      const ganador = simularBatalla(luchadores[i], luchadores[i + 1]);
      ganadores.push(ganador);
    }
    return ganadores;
  }
}

module.exports = Torneo;
