import React from 'react'
import IconeButton from '../template/iconeButton';
import Timeago from '../template/TimeAgo'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(tarefa => (
            <tr key={tarefa._id}>
                <td className={tarefa.done ? 'marcarConcluido' : ''}>
                    {tarefa.description}
                </td>
                <td className={tarefa.done ? 'centro marcarConcluido' : 'centro'}>
                    <Timeago data={tarefa.dataCriado} />
                </td>
                <td>
                    <IconeButton style='success' icon='check' hide={tarefa.done}
                        onClick={() => props.handleMarcarConcluido(tarefa)}></IconeButton>
                    <IconeButton style='warning' icon='undo' hide={!tarefa.done}
                        onClick={() => props.handleMarcarPendente(tarefa)}></IconeButton>
                    <IconeButton style='danger' icon='trash-o' hide={!tarefa.done}
                        onClick={() => props.handleRemove(tarefa)}></IconeButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th className='tabelaCriado centro'>Criado</th>
                    <th className='tabelaAcoes centro'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}