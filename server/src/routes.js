const express = require('express')

const routes = express.Router();

const Usuario = require('./controllers/usuarios.controller')

routes.get('/', Usuario.index)

//Rotas de Usuarios
routes.post('/api/usuarios', Usuario.create)
routes.get('/api/usuarios', Usuario.index);
routes.get('/api/usuarios.details/:_id', Usuario.details);
routes.delete('/api/usuarios/:_id', Usuario.delete);

module.exports = routes