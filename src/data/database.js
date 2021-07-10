require('dotenv').config()
const mongoose = require('mongoose')

const connect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log('Database conectada!!'))
    .catch((error) => {
        console.log("Erro na conexão")
        console.log(error)
    })
}

module.exports = { connect }