const express = require('express');
const usuarioRouter = require('./usuario.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/usuarios', usuarioRouter);

module.exports = router;