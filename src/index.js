// src/index.js

const Luchador = require('./Luchador');
const Saiyan = require('./Saiyan');
const Torneo = require('./Torneo');

// Crear luchadores de prueba con diferentes razas y atributos
const luchadores = [
    new Saiyan("Goku", 93, 98, 85),   
    new Saiyan("Vegeta", 95, 94, 88),
    new Saiyan("Gohan", 90, 90, 82),  
    new Saiyan("Trunks", 88, 86, 80), 
        new Saiyan("Gogeta", 100, 100, 95), 
        new Saiyan("Vegetto", 98, 99, 94),
    new Namekian("Piccolo", 92, 87, 88), 
    new Namekian("Dende", 85, 80, 75),   
    new Earthling("Krillin", 78, 83, 76), // Krillin
    new Earthling("Tien", 81, 80, 74)  
];

const torneo = new Torneo(luchadores);

console.log("Iniciando el torneo con " + luchadores.length + " luchadores!");
const campeon = torneo.iniciar();
console.log(`El campeón del torneo es: ${campeon.nombre}`);
