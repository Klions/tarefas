import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/estilo.css'

import React from 'react'
import Menu from '../template/menu'
import Rotas from './rotas'
import Timeago from '../template/TimeAgo'

export default props => (
    <div className='container'>
        <Menu />
        <Rotas />
    </div>
)