const { getAll, create, remove, update } = require('../controllers/usuario.controllers');
const express = require('express');

const usuarioRouter = express.Router();

usuarioRouter.route("/")
		.get(getAll)
		.post(create);


usuarioRouter.route("/:id") // /todos/:id
		.delete(remove)
		.put(update);		

module.exports = usuarioRouter;