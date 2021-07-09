const express = require('express')
const router = express.Router()
const controller = require('../controller/controllerFilmes')

//Criar um titulo -> POST -> save()
router.post('/adicionar', controller.criaFilme)
router.get('/mostrarTodos', controller.mostraFilmes)

module.exports = router