const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{
    response.status(200).json({
        "titulo": "API Anti Tedio",
        "version": "1.0.0",
        "mensagem": "Bem vindx á API que vai acabar com o seu tédio! Nessa API vc pode pesquisar por jogos, series e filmes conforme os seus gostos!"
    })
})
module.exports = router