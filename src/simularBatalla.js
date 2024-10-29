const Luchador = require('./Luchador');

function simularBatalla(luchador1, luchador2) {
  const [primerLuchador, segundoLuchador] = luchador1.velocidad >= luchador2.velocidad ? [luchador1, luchador2] : [luchador2, luchador1];

  while (primerLuchador.estaVivo() && segundoLuchador.estaVivo()) {
    primerLuchador.atacar(segundoLuchador);
    if (segundoLuchador.estaVivo()) {
      segundoLuchador.atacar(primerLuchador);
    }
  }

  return primerLuchador.estaVivo() ? primerLuchador : segundoLuchador;
}

module.exports = simularBatalla;
