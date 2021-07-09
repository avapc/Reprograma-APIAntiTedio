const express = require("express")
const app = express()
const cors = require("cors")

const db = require('./data/database')
db.connect() 

app.use(cors()) //resolve o problema de uma só origem do navegador
app.use(express.json()) //transforma em json o body (que vem em string)

const index = require("./routes/index")
const filmes = require("./routes/routeFilmes")
const jogos = require("./routes/routeJogos")
const series = require("./routes/routeSeries")

app.use("/", index)
app.use("/filmes", filmes)
app.use("/jogos", jogos)
app.use("/series", series)

module.exports = app 