const express = require('express')
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
//Para crear secciones entre paginas
hbs.registerPartials(__dirname + '/views/parciales'); //Para integrar secciones de paginas como header, footer a travez de {{> nombre-del-archivo }}
app.set('view engine', 'hbs'); // uso de handlerbar permite manejar archivos .hbs

//Manejando vista con HBS
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Engel Diaz'
    }); //va renderizar el archivo home
});

app.get('/about', (req, res) => {
    res.render('about');
})

//Enviado JSON a la vista
app.get('/JSON', (req, res) => {
    let salida = {
        nombre: 'engel diaz',
        edad: 3333,
        url: req.url
    };
    res.send(salida)
});
//Enviando HTML a la vista
app.get('/data', (req, res) => {
    res.send('Hola mundo.')
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});