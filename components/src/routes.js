import React, {Component} from 'react';
import {SafeAreaView, Text} from "react-native";
import IconeLimpo from 'react-native-vector-icons/AntDesign';
import IconePreenchido from 'react-native-vector-icons/FontAwesome';

import {createMaterialTopTabNavigator} from "react-navigation-tabs";
import { createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";

import Feed from './pages/Feed';
import Perfil from './pages/Perfil';
import Procurar from './pages/Procurar';
import Adicionar from './pages/Adicionar';
import Favoritos from './pages/Favoritos';


export default class Routes extends Component{
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
                <AppTabNavigator />
            </SafeAreaView>
        );
    }
}


const FeedStack = createStackNavigator({
    Feed:{
        screen: Feed,
    },
    Outros: Perfil
});

const AppTabNavigator = createAppContainer(
    createMaterialTopTabNavigator(
        {
            Feed: {
                screen: Feed,
                navigationOptions:{
                    tabBarIcon: ({focused}) => {
                        if(focused){
                            return <IconePreenchido name="home" size={30} color="#000000" />
                        }
                        return <IconePreenchido name="home" size={25} color="#AAAAAA" />
                    }
                }
            },

            Procurar: {
                screen: Procurar,
                navigationOptions: {
                    tabBarIcon: ({focused}) => {
                        if(focused){
                            return <IconePreenchido name="search" size={30} color="#000000" />
                        }
                        return <IconePreenchido name="search" size={25} color="#AAAAAA" />
                    }
                }
            },

            Adicionar: {
                screen: Adicionar,
                navigationOptions:{
                    tabBarIcon: ({focused}) => {
                        if(focused){
                            return <IconePreenchido name="square" size={30} color="#000000" />
                        }
                        return <IconePreenchido name="square" size={25} color="#AAAAAA" />
                    }
                }
            },

            Favoritos: {
                screen: Favoritos,
                navigationOptions:{
                    tabBarIcon: ({focused}) => {
                        if(focused){
                            return <IconePreenchido name="heart" size={30} color="#000000" />
                        }
                        return <IconePreenchido name="heart" size={25} color="#AAAAAA" />
                    }
                }
            },

            Perfil: {
                screen: Perfil,
                navigationOptions:{
                    tabBarIcon: ({focused}) => {
                        if(focused){
                            return <IconePreenchido name="user" size={30} color="#000000" />
                        }
                        return <IconePreenchido name="user" size={25} color="#AAAAAA" />
                    }
                }
            },


        }, {
            tabBarPosition: 'bottom',
            initialRouteName: 'Feed',

            tabBarOptions:{
                showIcon: true,
                showLabel: false,
                activeTintColor: '#FFFFFF',
                inactiveTintColor: '#F8F8F8',
                indicatorStyle:{
                    borderBottomColor: '#FAFAFA',
                    borderBottomWidth: 4,
                },
                labelStyle:{
                    textAlign: 'center'
                },
                style:{
                    backgroundColor: '#FAFAFA'
                }
            }
        }
    )
);