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

const filtrarJogosGenero = async (req, res) => {
    const { genero } = req.query
    try {
        const jogos = await Jogos.find({ genero: {$regex: `.*${ genero }.*`}})
        if(jogos == undefined || jogos == ''){ 
            return res.status(404).json({ mensagem: 'Jogo não encontrado!' })
        }
        return res.status(200).json(jogos);
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const deletarJogos = async (req, res) => {
    const jogos = await Jogos.deleteOne({nome: req.query.nome})
    if(jogos.deletedCount == 0){
        res.status(404).json({mensagem: "Jogo não encontrado"})
    }

    return res.status(200).json({mensagem: "Jogo deletado com sucesso!"})
}

const atualizarJogo = async (req, res) =>{
    const jogos = await Jogos.findById(req.params.id)
    
    if(jogos == undefined || jogos == ''){
        res.status(404).json({mensagem: "Jogo não encontrado"})
    }
    const { nome, genero, descricao, publicacao, plataformas } = req.body;
    jogos.nome = nome || jogos.nome
    jogos.genero = genero || jogos.genero
    jogos.descricao = descricao || jogos.descricao
    jogos.publicacao = publicacao || jogos.publicacao
    jogos.plataformas = plataformas || jogos.plataformas

    try{
        const atualizar = await jogos.save()
        res.status(200).json(atualizar)
    }catch (err) {
        res.status(500).json({ message: err.message })
    }

}

const darNotaJogo = async (req, res) =>{
    const jogos = await Jogos.findById(req.params.id)
    
    if(jogos == undefined || jogos == ''){
        res.status(404).json({mensagem: "Jogo não encontrado"})
    }

    try{
        const novaNota = (jogos.nota + req.body.nota)/2
        jogos.nota = novaNota
        const atualizar = await jogos.save()
        res.status(200).json(atualizar)
    }catch (err) {
        res.status(500).json({ message: err.message })
    }

}

module.exports = { 
    criaJogo,
    mostraJogo,
    deletarJogos,
    atualizarJogo,
    darNotaJogo,
    filtrarJogosGenero
} 