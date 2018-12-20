import React from 'react'
import PageHeader from '../template/pageHeader'
import PageHeader3 from '../template/pageHeader3'

export default props => (
    <div>
        <PageHeader name='Tarefas' small='Sobre'></PageHeader>
        <PageHeader3 name='O que faz?' small='É um projeto onde é armazenado o nome e data via API HTTP. É possível marcar como concluído, voltar ao estado pendente e excluir.' />
        <PageHeader3 name='Autor do Projeto' small='Jonatan Barcelos' icon='male' />
        <PageHeader3 name='Versão' small='1.0.0' icon='code' />
    </div>
)