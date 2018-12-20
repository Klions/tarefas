const mongoose = require('mongoose')

/* MAPEANDO OBJETOS DO MONGODB */ 
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/tarefa')