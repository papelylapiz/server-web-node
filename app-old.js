const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-type': 'application/json' }); //para retorna una respuesta en formatop json 
        let salida = {
            nombre: 'Engel Diaz',
            edad: 333,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        //res.write('Hola Mundo');
        res.end();
    })
    .listen('8080');

console.log('Escuchando en el puerto 8080');