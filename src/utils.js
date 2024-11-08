function esPotenciaDeDos(n) { //Comprobar si el num de luchadores es potencia de 2
  return (n & (n - 1)) === 0 && n > 0;
}

module.exports = {esPotenciaDeDos};
