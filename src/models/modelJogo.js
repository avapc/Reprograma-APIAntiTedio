const mongoose = require('mongoose')

const jogoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    publicacao: {
        type: String,
        required: true
    },
    plataformas: {
        type: String,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    },
    nota: {
        type: Number,
        required: true,
        default: 7
    }
})

module.exports = mongoose.model('Jogo', jogoSchema )