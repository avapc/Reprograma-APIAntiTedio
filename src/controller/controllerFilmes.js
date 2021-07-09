const mongoose = require('mongoose')
const Filme = require('../models/modelFilme')

const criaFilme = async(req, res) => {
    const filme = new Filme({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        genero:req.body.genero,
        publicacao:req.body.publicacao,
        descricao:req.body.descricao,
        elenco:req.body.elenco
    })
    try{
        const novoFilme = await filme.save()
        return res.status(201).json(novoFilme)
    }catch (err){
        res.status(400).json({message: err.message})
    }
}

const mostraFilmes = async (req, res)=> {
    const filmes = await Filme.find()
    return res.status(200).json(filmes)
}

module.exports = { 
    criaFilme,
    mostraFilmes
}