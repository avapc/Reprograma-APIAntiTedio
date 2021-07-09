const express = require("express")
const app = express()
const cors = require("cors")

const db = require('./data/database')
db.connect() 

app.use(cors()) //resolve o problema de uma só origem do navegador
app.use(express.json()) //transforma em json o body (que vem em string)

const index = require("./routes/index")

app.use("/", index)

module.exports = app