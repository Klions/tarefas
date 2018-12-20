const servidor = require('./config/servidor')
require('./config/database')
require('./config/rotas')(servidor)