const { Router } = require('express');

const router = Router();

//rutas
const productos_routes = require('./productos');


router.use('/productos', productos_routes);



module.exports = router;