


const express = require('express');
const app = express();


const port = process.env.PORT || 3000;

const hbs = require('hbs');
require("./hbs/helpers");

//Parciales son bloques de código HTML para compartir entre vistas,
//por ejemplo: Nav, Footer, etc
//Dirname, es para obtener la ruta actual del doc

hbs.registerPartials(__dirname + '/views/partials');


//MiddleWare: Algo que siempre se ejecuta no importa naa
app.use( express.static(__dirname+"/public"));

//EXPRESS HBS para compartir vistas
app.set('view engine', 'hbs');

app.get('/',(req, res) => {
    let salida = {
        nombre: "gLoria Aguilar",
        edad: 22,
        url: req.url
    }
    // res.send(salida);

    res.render("home",{
        nombre: "gLoria Aguilar"
    });
});
app.get('/about',(req, res) => {
    let salida = {
        nombre: "Gloria",
        edad: 22,
        url: req.url
    }
    // res.send(salida);

    res.render("about");
});
app.get('/data',(req, res) => {

    res.send("Hola Mundo");
});
app.listen(port , () =>{
    //Este console es para indicar que el servicio esta arriba
    console.log("Escuchando peticiones en el puerto");
} );