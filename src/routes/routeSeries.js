const express = require('express')
const router = express.Router()
const controller = require('../controller/controllerSeries')

router.post('/adicionar', controller.criaSerie)
router.get('/mostrarTodos', controller.mostraSeries)
router.get('/filtrarGenero', controller.filtrarSeriesGenero)
router.delete('/deletar', controller.deletarSerie)
router.patch('/atualizar/:id', controller.atualizarSerie)
router.patch('/darNota/:id', controller.darNotaSeries)


module.exports = router