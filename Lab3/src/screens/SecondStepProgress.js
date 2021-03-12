import React, {Component} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import { ScreenStyle } from '../Styles';

export default class SecondStepProgress extends Component {
    render(){ 
        return (
            <View style={ScreenStyle.view}>
                <View style={[ScreenStyle.content,{flex:1,marginBottom:'5%'}]}>
                    <Text>Drugi przykład 'ActivityIndicator', tym razem ostylowany.</Text>
                    <Text>Zmieniony został kolor na elektryczny odcień niebieskiego jak i rozmiar na 'large'.</Text>
                </View>
                <View style={[ScreenStyle.content,ScreenStyle.center,{flex:9}]}>
                    <ActivityIndicator
                        size = 'large'
                        color = '#0892d0'/>
                </View>
            </View>
        )
    };
}