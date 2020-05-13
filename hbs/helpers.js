
const hbs = require('hbs');


//Parciales son bloques de código HTML para compartir entre vistas,
//por ejemplo: Nav, Footer, etc
//Dirname, es para obtener la ruta actual del doc

hbs.registerHelper("getAnio",() => {
    return new Date().getFullYear();
});
hbs.registerHelper("capitalizar", (texto ) => {

    let palabras = texto.split(" ");
    palabras.forEach((palabra,idx)=> {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();

    });

    return palabras.join(" ");
});