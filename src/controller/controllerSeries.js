const mongoose = require('mongoose')
const Series = require('../models/modelSerie')

const criaSerie = async(req, res) => {
    const serie = new Series({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        genero:req.body.genero,
        publicacao:req.body.publicacao,
        descricao:req.body.descricao,
        temporadas:req.body.temporadas
    })
    if(req.body.senha != "admin123"){
        res.status(403).json({message: "Acesso negado, senha incorreta"})
    }
    try{
        const novoSerie = await serie.save()
        return res.status(201).json(novoSerie)
    }catch (err){
        res.status(400).json({message: err.message})
    }
}

const mostraSeries = async (req, res)=> {
    const series = await Series.find()
    return res.status(200).json(series)
}

const filtrarSeriesGenero = async (req, res) => {
    const { genero } = req.query
    try {
        const series = await Series.find({ genero: {$regex: `.*${ genero }.*`}})
        if(series == undefined || series == ''){ 
            return res.status(404).json({ mensagem: 'Serie não encontrada!' })
        }
        return res.status(200).json(series);
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const deletarSerie = async (req, res) => {
    const series = await Series.deleteOne({nome: req.query.nome})
    if(req.body.senha != "admin123"){
        res.status(403).json({message: "Acesso negado, senha incorreta"})
    }
    if(series.deletedCount == 0){
        res.status(404).json({mensagem: "Serie não encontrada"})
    }

    return res.status(200).json({mensagem: "Serie deletada com sucesso!"})
}

const atualizarSerie = async (req, res) =>{
    const series = await Series.findById(req.params.id)
    if(req.body.senha != "admin123"){
        res.status(403).json({message: "Acesso negado, senha incorreta"})
    }
    
    if(series == undefined || series == ''){
        res.status(404).json({mensagem: "Serie não encontrada"})
    }
    const { nome, genero, descricao, publicacao, temporadas } = req.body;
    series.nome = nome || series.nome
    series.genero = genero || series.genero
    series.descricao = descricao || series.descricao
    series.publicacao = publicacao || series.publicacao
    series.temporadas = temporadas || series.temporadas 

    try{ 
        const atualizar = await series.save()
        res.status(200).json(atualizar)
    }catch (err) {
        res.status(500).json({ message: err.message })
    }

}

const darNotaSeries = async (req, res) =>{
    const series = await Series.findById(req.params.id)
    
    if(series == undefined || series == ''){
        res.status(404).json({mensagem: "Serie não encontrada"})
    }

    try{
        const novaNota = (series.nota + req.body.nota)/2
        series.nota = novaNota
        const atualizar = await series.save()
        res.status(200).json(atualizar)
    }catch (err) {
        res.status(500).json({ message: err.message })
    }

}

module.exports = { 
    criaSerie,
    mostraSeries,
    filtrarSeriesGenero,
    deletarSerie,
    atualizarSerie,
    darNotaSeries
}