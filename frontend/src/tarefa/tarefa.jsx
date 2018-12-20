import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import Form from './Form'
import Lista from './Lista'

const URL = 'http://localhost:4002/api/tarefas'

export default class tarefa extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [], textoDigitado: '' }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.handleMarcarConcluido = this.handleMarcarConcluido.bind(this)
        this.handleMarcarPendente = this.handleMarcarPendente.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-dataCriado${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description })
            .then(resp => this.refresh())
    }

    handleRemove(valor) {
        axios.delete(`${URL}/${valor._id}`)
            .then(resp => this.refresh(this.state.description))
    }
    
    handleMarcarConcluido(valor) {
        axios.put(`${URL}/${valor._id}`, { ...valor, done: true })
            .then(resp => this.refresh(this.state.description))
    }

    handleMarcarPendente(valor) {
        axios.put(`${URL}/${valor._id}`, { ...valor, done: false })
            .then(resp => this.refresh(this.state.description))
    }

    handleClear() {
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <Form 
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} 
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                <Lista 
                    list={this.state.list}
                    handleMarcarConcluido={this.handleMarcarConcluido}
                    handleMarcarPendente={this.handleMarcarPendente}
                    handleRemove={this.handleRemove}
                    textoDigitado={this.state.description} />
            </div>
        )
    }
}