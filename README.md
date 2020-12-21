## Server web 

Aplicación en node para desplegar unn server web con node

```
npm install
```

Al colocar esta configuración en el archivo package.json
```
"scripts": {
        "start": "node server",
        "nodemon": "nodemon server -e js,hbs,css",
```
Se puede ejecutar desde la terminal
```
npm start  
npm run nodemon
´´´
npm run nodemon --> es un comando especial por tal motivo es necesario escribir la palabra run 