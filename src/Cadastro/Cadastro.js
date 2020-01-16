import React, { Component } from 'react';
import Input from './Input';
import Row from './Row';

class Cadastro extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            numero: '',
            cadastros: []
        }
    }

    handleChange(event) {
        this.state[event.target.name] = event.target.value;
    }

    cadastrar(event) {
        event.preventDefault()
        this.state.cadastros.push({
            nome: this.state.nome,
            numero: this.state.numero
        })
    }

    render() {
        return (
            <form onSubmit={this.cadastrar()}>
                <div>
                    <h2>Te cadastra ai tchê</h2>
                    <div>
                        <label>Teu nome:</label>
                    </div>
                    <Input type={'text'} name={'nome'} />
                </div>
                <div>
                    <div>
                        <label>Um valor ai:</label>
                    </div>
                    <Input name={'numero'}/>
                </div>
            </form>
        )
    }
}

export default Cadastro;