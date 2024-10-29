function esPotenciaDeDos(n) {
  return (n & (n - 1)) === 0 && n > 0;
}

function mezclarArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

module.exports = { esPotenciaDeDos, mezclarArray };
