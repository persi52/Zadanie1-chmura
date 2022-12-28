import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

class InsertNumber extends Component {
    constructor(props) {
        super(props)

        this.state = {
            number: 0,
            result: null
        }
    }

    handleChangeNumber = async event => {
        const number = event.target.value
        this.setState({ number })
    }

 
    handleInsertNumber = async () => {
        const { number } = this.state
      
        const payload = { number }

        await api.insertNumber(payload).then(res => {      
           console.log(res);
           this.setState({result: res.data.result})
        })
    }


    render() {
        const { number, result } = this.state
        return (
            <Wrapper>
                <h1>Bartłomiej Zima</h1>
                <h1>Grupa 1.5</h1>
            <Label>Podaj element ciągu: </Label>
                <InputText
                    type="text"
                    value={number}
                    onChange={this.handleChangeNumber}
                />

                <Button onClick={this.handleInsertNumber}>Wylicz wartość ciągu Fibbonaciego</Button>
                <h2>Wynik: {result}</h2>
            </Wrapper>
        )
    }
}

export default InsertNumber