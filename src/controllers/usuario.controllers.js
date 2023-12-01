const catchError = require('../utils/catchError');
const Usuario = require('../models/Usuario');

const getAll = catchError(async(req, res) => {
    
    const usuarios = await Usuario.findAll();
    return res.json(usuarios);
});
 const create = catchError( async(req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body;
    const usuario = await usuario.create({
        first_name, last_name, email, password, birthday
    });
    return res.status(201).json(usuario);
 })

 const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await ToDo.destroy({ where: { id } });
    return res.sendStatus(204);
  })


  const update = catchError(async(req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, password, birthday } = req.body;
    const usuario = await Usuario.update(
      { first_name, last_name, email, password, birthday },
      { where: { id }, returning: true }
    );
    return res.json(usuario);
  });

module.exports = {
    getAll,
    create,
    remove,
    update,
}