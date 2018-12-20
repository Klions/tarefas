import React from 'react'

import Col from '../template/Col'
import IconeButton from '../template/iconeButton'

export default props => {
    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if(e.key === 'Escape'){
            props.handleClear()
        }
    }
    return (
        <div role='form' className='tarefasForm'>
            <div className='centro atalhos'>
                <Col cols='12 12 12'>
                    <h2>Atalhos</h2>
                </Col>
                <Col cols='12 4 4'>
                    <h4>Criar novo: ENTER</h4>
                </Col>
                <Col cols='12 4 4'>
                    <h4>Pesquisar: SHIFT+ENTER</h4>
                </Col>
                <Col cols='12 4 4'>
                    <h4>Apagar texto: ESC</h4>
                </Col>
            </div>
            <Col cols='12 9 10'>
                <input type="text" className='form-control'
                    placeholder='Adicione nome à tarefa'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler} 
                    value={props.description} />
                <p className="digitando">{props.description ? 'digitando...': ''}</p>
            </Col>
            <Col cols='12 3 2'>
                <IconeButton style='primary' icon='plus'
                    onClick={props.handleAdd}></IconeButton>
                <IconeButton style='info' icon='search'
                    onClick={props.handleSearch}></IconeButton>
                <IconeButton style='default' icon='close'
                    onClick={props.handleClear}></IconeButton>
            </Col>
        </div>
    )
}