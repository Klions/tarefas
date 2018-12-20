const express = require('express')

module.exports = function(server) {

    //ROTAS API
    const router = express.Router()
    server.use('/api', router)

    //ROTAS TAREFAS
    const tarefasService = require('../api/tarefa/tarefaServices')
    tarefasService.register(router, '/tarefas')
}