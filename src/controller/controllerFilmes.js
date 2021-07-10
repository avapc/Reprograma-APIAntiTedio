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

const mostraFilmes = async (req, res) => {
    const filmes = await Filme.find()
    return res.status(200).json(filmes)
}

const filtrarFilmesGenero = async (req, res) => {
    const { genero } = req.query
    try {
        const filmes = await Filme.find({ genero: {$regex: `.*${ genero }.*`}})
        if(filmes == undefined || filmes == ''){ 
            return res.status(404).json({ mensagem: 'Filme não encontrado!' })
        }
        return res.status(200).json(filmes);
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const deletarFilme = async (req, res) => {
    const filmes = await Filme.deleteOne({nome: req.query.nome})
    if(filmes.deletedCount == 0){
        res.status(404).json({mensagem: "Filme não encontrado"})
    }
    return res.status(200).json({mensagem: "Filme deletado com sucesso!"})
}

const atualizarFilme = async (req, res) =>{
    const filmes = await Filme.findById(req.params.id)
    
    if(filmes == undefined || filmes == ''){
        res.status(404).json({mensagem: "Filme não encontrado"})
    }
    const { nome, genero, descricao, publicacao, elenco } = req.body;
    filmes.nome = nome || filmes.nome
    filmes.genero = genero || filmes.genero
    filmes.descricao = descricao || filmes.descricao
    filmes.publicacao = publicacao || filmes.publicacao
    filmes.elenco = elenco || filmes.elenco

    try{
        const atualizar = await filmes.save()
        res.status(200).json(atualizar)
    }catch (err) {
        res.status(500).json({ message: err.message })
    }

}

const darNotaFilme = async (req, res) =>{
    const filmes = await Filme.findById(req.params.id)
    
    if(filmes == undefined || filmes == ''){
        res.status(404).json({mensagem: "Filme não encontrado"})
    }

    try{
        const novaNota = (filmes.nota + req.body.nota)/2
        filmes.nota = novaNota
        const atualizar = await filmes.save()
        res.status(200).json(atualizar)
    }catch (err) {
        res.status(500).json({ message: err.message })
    }

}

module.exports = { 
    criaFilme,
    mostraFilmes,
    filtrarFilmesGenero,
    deletarFilme,
    atualizarFilme,
    darNotaFilme
}