const express = require('express')
const router = express.Router()
const controller = require('../controller/controllerJogos')

router.post('/adicionar', controller.criaJogo)
router.get('/mostrarTodos', controller.mostraJogo)
router.get('/filtrarGenero', controller.filtrarJogosGenero)
router.delete('/deletar', controller.deletarJogos)
router.patch('/atualizar/:id', controller.atualizarJogo)
router.patch('/darNota/:id', controller.darNotaJogo)

module.exports = router