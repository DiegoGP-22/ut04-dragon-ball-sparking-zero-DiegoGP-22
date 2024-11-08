const Luchador = require('./Luchador');
const Saiyan = require('./Saiyan');
const Namekian = require('./Namekian');
const Earthling = require('./Earthling');
const Torneo = require('./Torneo');

// Seleccionar o quitar luchadores con los comentarios
const luchadores = [
    new Saiyan("Goku", 88, 90, 89),   
    new Saiyan("Vegeta", 90, 87, 90),
    new Saiyan("Gogeta", 100, 100, 96), 
    new Saiyan("Vegetto", 99, 97, 97),
    new Namekian("Piccolo", 80, 83, 80), 
    new Namekian("Dende", 79, 83, 85),   
    new Earthling("Krillin",81, 81, 70 ),
    new Earthling("Tien", 79, 82, 80),
    //new Saiyan("Gohan", 86, 87, 84),  
    //new Saiyan("Trunks", 83, 85 83),   
];

// Desordenar array
luchadores.sort(() => Math.random() - 0.5);

const torneo = new Torneo(luchadores);

console.log("Iniciando el torneo con " + luchadores.length + " luchadores!");
const campeon = torneo.iniciar();
console.log(`\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            \n\t···El campeón del torneo es: ${campeon.nombre}···`);
