const hbs = require('hbs');

// helper
hbs.registerHelper('getAnio', () => { //Permite crear variables generales para ser usadas en todas las vistas
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, index) => {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});