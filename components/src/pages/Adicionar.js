import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

export default class Adicionar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.navigation.getParam('id', null),
            titulo: props.navigation.getParam('titulo', null),
            autor: props.navigation.getParam('autor', null)
        }
    }

    salvarDados() {
        let operacao = 'POST';
        let linkFetch = 'http://localhost:3000/view/inserir.php';
        if (this.state.id) {
            operacao = 'PUT';
            linkFetch = 'http://localhost:3000/view/inserir.php' + '/' + this.state.id;
        }
        fetch(linkFetch, {
            method: operacao,
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                titulo: this.state.titulo,
                autor: this.state.autor,
            })
        }).then((retorno) => {
            if (retorno.status >= 200) {
                alert('Livro Adicionado!');
                this.voltar();
            }
        })
    }

    voltar() {
        this.props.navigation.goBack();
    }


    render() {
        return (
            <View>
                <View style={{ marginHorizontal: 16, marginVertical: 16 }}>

                    <Text style={styles.descricaoDoTexto}>Título: </Text>
                    <TextInput
                        style={styles.campoTextInput}
                        onChangeText={text => this.setState({
                            titulo: text
                        })}
                        value={this.state.titulo}
                    />
                    <Text style={styles.descricaoDoTexto}>Autor: </Text>
                    <TextInput
                        style={styles.campoTextInput}
                        onChangeText={text => this.setState({
                            autor: text
                        })}
                        value={this.state.autor}
                    />

                    <TouchableOpacity style={styles.SalvarLivro} onPress={() => this.salvarDados()}>
                        <Icon name="check" size={20} color='#AAAAAA' />
                    </TouchableOpacity>
                </View>

                <View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity style={{ paddingLeft: 8 }}>
                            <Text style={styles.titulo_livro}>{this.state.titulo}</Text>
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.autor_livro}>{this.state.autor}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ padding: 20 }} />
                <View style={styles.line} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titulo_livro: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    autor_livro: {
        fontSize: 12,
        paddingLeft: 6
    },

    descricaoDoTexto: {
        color: '#000000',
        fontWeight: 'bold',
        marginTop: 6,
    },

    SalvarLivro: {
        marginVertical: 6,
        alignSelf: 'flex-end',
        height: 40,
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#000000',
    }

})