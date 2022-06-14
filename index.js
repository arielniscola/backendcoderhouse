const express = require('express');
const app = express();
const PORT = 8080;
const routes = require('./routes/index');

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/public', express.static(__dirname + '/public'));
app.use('/api', routes);

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})

server.on("error", error => console.log(`Error en el servidor ${error}`));