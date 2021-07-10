const express = require("express")
const app = express()
const cors = require("cors")

const db = require('./data/database')
db.connect() 

app.use(cors()) 
app.use(express.json())

const index = require("./routes/index")
const filmes = require("./routes/routeFilmes")
const jogos = require("./routes/routeJogos")
const series = require("./routes/routeSeries")

app.use("/", index)
app.use("/filmes", filmes)
app.use("/jogos", jogos)
app.use("/series", series)

module.exports = app 