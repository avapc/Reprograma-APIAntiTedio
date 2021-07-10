const express = require('express')
const router = express.Router()
const controller = require('../controller/controllerFilmes')

router.post('/adicionar', controller.criaFilme)
router.get('/mostrarTodos', controller.mostraFilmes)
router.get('/filtrarGenero', controller.filtrarFilmesGenero)
router.delete('/deletar', controller.deletarFilme)
router.patch('/atualizar/:id', controller.atualizarFilme)
router.patch('/darNota/:id', controller.darNotaFilme)

module.exports = router