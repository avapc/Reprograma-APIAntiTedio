const express = require('express')
const router = express.Router()
const controller = require('../controller/controllerSeries')

//Criar um titulo -> POST -> save()
router.post('/adicionar', controller.criaSerie)
router.get('/mostrarTodos', controller.mostraSeries)

module.exports = router