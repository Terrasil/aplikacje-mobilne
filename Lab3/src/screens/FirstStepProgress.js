import React, {Component} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import { ScreenStyle } from '../Styles';

export default class FirstStepProgress extends Component {
    render(){ 
        return (
            <View style={ScreenStyle.view}>
                <View style={[ScreenStyle.content,{flex:1,marginBottom:'5%'}]}>
                    <Text>Domyślny 'ActivityIndicator', nie ostylowany.</Text>
                    <Text>Jedynie podano kolor jako czarny aby był w ogóle widoczny.</Text>
                </View>
                <View style={[ScreenStyle.content,ScreenStyle.center,{flex:9}]}>
                    <ActivityIndicator
                        color = '#000'/>
                </View>
            </View>
        )
    };
}