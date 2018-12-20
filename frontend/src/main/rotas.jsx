import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Tarefa from '../tarefa/tarefa'
import Sobre from '../sobre/sobre'

export default props => (
    <Router history={hashHistory}>
        <Route path='/tarefas' component={Tarefa} />
        <Route path='/sobre' component={Sobre} />
        <Redirect from='*' to='/tarefas' />
    </Router>
)