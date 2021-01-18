import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import Estilo from '../style';

class Mega extends Component {
    state = {
        qtdNumero: this.props.qtdNumero,
        numeros: []
    }

    alteratQtdNumero = (qtd) => {
        this.setState({ qtdNumero: +qtd });
    }

    gerarNumeros = () => {
        this.setState({ numeros:[] });
    }

    render() {
        return (
            <>
                <Text style={Estilo.fontG}>
                    Gerador de Mega-Sena
                    {this.state.qtdNumero}
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth:1}}
                    placeholder="quantidade de numeros"
                    value={`${this.state.qtdNumero}`}
                    onChangeText={this.alteratQtdNumero}
                />
            </>
        );
    }
}

export default Mega;