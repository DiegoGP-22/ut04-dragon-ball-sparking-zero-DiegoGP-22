const Luchador = require('./Luchador');
const Saiyan = require('./Saiyan');  
const Namekian = require('./Namekian');
const Earthling = require('./Earthling');
const Torneo = require('./Torneo');


function simularBatalla(luchador1, luchador2) {
  // Empieza primero quien tenga mas velocidad
  const [primerLuchador, segundoLuchador] = luchador1.velocidad >= luchador2.velocidad ? [luchador1, luchador2] : [luchador2, luchador1];

  console.log(`\n--------¡Comienza la batalla entre ${primerLuchador.nombre} y ${segundoLuchador.nombre}!--------`);

  // Mientras ambos luchadores sigan vivos, continuan peleando
  while (primerLuchador.estaVivo() && segundoLuchador.estaVivo()) {
    let probabilidad = Math.random();
    // El primer luchador puede usar su habilidad especial antes de atacar
    if (primerLuchador instanceof Saiyan && !primerLuchador.esSuperSaiyan && probabilidad < 0.5) {
      primerLuchador.transformar();
    } else if (primerLuchador instanceof Namekian) {
      primerLuchador.regenerarSalud();
    } else if (primerLuchador instanceof Earthling && !primerLuchador.tecnicaUsada && probabilidad < 0.5) {
      primerLuchador.usarTecnicaEspecial();
    }

    // El primer luchador ataca
    const resultadoPrimerAtaque = primerLuchador.atacar(segundoLuchador);
    console.log(resultadoPrimerAtaque.mensaje); // Imprime el mensaje de ataque

    
    // Perder transformacion saiyan
    probabilidad = Math.random();
    if (primerLuchador instanceof Saiyan && primerLuchador.esSuperSaiyan && probabilidad > 0.8) {
      primerLuchador.revertirTransformacion();
    }
    // Desactivar tecnica terricola despues de 1 golpe
    if (primerLuchador instanceof Earthling && primerLuchador.tecnicaUsada) {
      primerLuchador.finTecnicaEspecial();
    }


    // Si el segundo luchador sigue vivo, es su turno
    if (segundoLuchador.estaVivo()) {
      probabilidad = Math.random(); 
      // El segundo luchador puede usar su habilidad especial antes de atacar
      if (segundoLuchador instanceof Saiyan && !segundoLuchador.esSuperSaiyan && probabilidad < 0.5) {
        segundoLuchador.transformar();
      } else if (segundoLuchador instanceof Namekian) {
        segundoLuchador.regenerarSalud();
      } else if (segundoLuchador instanceof Earthling && !segundoLuchador.tecnicaUsada && probabilidad < 0.5) {
        segundoLuchador.usarTecnicaEspecial();
      }

      const resultadoSegundoAtaque = segundoLuchador.atacar(primerLuchador);
      console.log(resultadoSegundoAtaque.mensaje);

      // Perder transformacion
      probabilidad = Math.random();
      if (segundoLuchador instanceof Saiyan && segundoLuchador.esSuperSaiyan && probabilidad > 0.8) {
        segundoLuchador.revertirTransformacion();
      }
      // Desactivar tecnica
      if (segundoLuchador instanceof Earthling && segundoLuchador.tecnicaUsada){
        segundoLuchador.finTecnicaEspecial();
      }

    }
  }

  const ganador = primerLuchador.estaVivo() ? primerLuchador : segundoLuchador;
  console.log(`\n\tEl ganador de esta batalla es ${ganador.nombre}!\n`);
  return ganador;
}

module.exports = simularBatalla;
