import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, Image, SafeAreaView, ScrollView } from 'react-native';

export default class Feed extends React.Component {
    static navigationOptions = {
        title: 'Feed',
    }

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            post: [],
        }
        this.getLivros();
    }

    async getLivros() {
        fetch('http://localhost:3000/view/listar.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    post: responseJson,
                });
            }).catch((error) => {
                alert(error);
            });
    }

    render() {

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View>
                <View style={styles.header}>
                    <Text style={{ color: 'white', fontSize: 28 }}> Livros</Text>
                </View>
                <NavigationEvents onDidFocus={() => this.getLivros()} />
                {
                    this.state.post.map((item) => {
                        return (
                            <TouchableOpacity key={item.id} onPress={() => this.props.navigation.navigate('Livros', {
                                id: item.id, titulo: item.titulo, autor: item.autor, preco: item.preco, quantidadeDisponivel: item.quantidadeDisponivel
                            })}>
                                <View style={styles.header_post}>

                                    <TouchableOpacity style={{ flex: 1 }}>
                                        <View style={{ paddingLeft: 6 }}>
                                            <Text style={styles.titulo_livro}>Título:{item.titulo}</Text>
                                        </View>

                                        <View style={{ paddingLeft: 6 }}>
                                            <Text style={styles.titulo_livro}>Autor: {item.autor}</Text>
                                        </View>

                                        <View style={{ paddingLeft: 6 }}>
                                            <Text style={styles.titulo_livro}>Preço: R$ {item.preco}</Text>
                                        </View>

                                        <View style={{ paddingLeft: 6 }}>
                                            <Text style={styles.titulo_livro}>Quantidade Disponível: {item.quantidadeDisponivel}</Text>
                                        </View>
                                    </TouchableOpacity>

                                </View>

                                <View style={{ padding: 20 }} />
                                <View style={styles.line} />
                            </TouchableOpacity>
                        )
                    }, { props: this.props })
                }
                <View style={{ padding: 30 }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titulo_livro: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    autor_livro: {
        fontSize: 16,
        paddingLeft: 6
    },
    header: {
        alignItems: 'center',
        backgroundColor: '#000999',
        padding: 12,
        marginBottom: 20
    },
    header_post: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 16,
        paddingBottom: 10,
        marginHorizontal: 6,

    },
    line: {
        padding: 1,
        width: '100%',
        backgroundColor: '#F1F1F1',
    },
})