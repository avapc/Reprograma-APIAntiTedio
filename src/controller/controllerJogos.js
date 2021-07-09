const mongoose = require('mongoose')
const Jogos = require('../models/modelJogo')

const criaJogo = async(req, res) => {
    const jogo = new Jogos({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        genero:req.body.genero,
        publicacao:req.body.publicacao,
        descricao:req.body.descricao,
        plataformas:req.body.plataformas
    })
    try{
        const novoJogo = await jogo.save()
        return res.status(201).json(novoJogo)
    }catch (err){
        res.status(400).json({message: err.message})
    }
}

const mostraJogo = async (req, res)=> {
    const jogo = await Jogos.find()
    return res.status(200).json(jogo)
}

module.exports = { 
    criaJogo,
    mostraJogo
}