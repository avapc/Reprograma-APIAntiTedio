const express = require('express')
const router = express.Router()
const controller = require('../controller/controllerJogos')

//Criar um titulo -> POST -> save()
router.post('/adicionar', controller.criaJogo)
router.get('/mostrarTodos', controller.mostraJogo)

module.exports = router