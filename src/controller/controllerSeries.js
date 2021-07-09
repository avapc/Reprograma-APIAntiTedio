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

module.exports = { 
    criaSerie,
    mostraSeries
}