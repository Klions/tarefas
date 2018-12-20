const port = 4002

const bodyParser = require('body-parser')

const express = require('express')
const servidor = express()
const allowControl = require('./control')

/* CONFIGURANDO O SERVIDOR COM EXPRESS */
servidor.use(bodyParser.urlencoded({ extended: true }))
servidor.use(bodyParser.json())
servidor.use(allowControl)

/* VERIFICAR SE TUDO ESTÁ FUNCIONANDO NORMALMENTE */
servidor.listen(port, function() {
    console.log(`BACKEND está executando na porta: ${port}`)
})

module.exports = servidor