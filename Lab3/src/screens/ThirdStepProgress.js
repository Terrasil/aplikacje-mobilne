import React, {Component} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import { ScreenStyle } from '../Styles';

export default class ThirdStepProgress extends Component {
    render(){ 
        return (
            <View style={ScreenStyle.view}>
                <View style={[ScreenStyle.content,{flex:1,marginBottom:'5%'}]}>
                    <Text>Ostatni 'ActivityIndicator'.</Text>
                    <Text>Animacja sotała odwrócona stylem (transform). Próba wyłączenia animacji komponentu kończy się tym że nie jest on widoczny.</Text>
                </View>
                <View style={[ScreenStyle.content,ScreenStyle.center,{flex:9}]}>
                    <ActivityIndicator
                        animating = {true}
                        size = 'large'
                        color = '#00f'
                        style={{transform: [{ scaleX: -1 }]}}/>
                </View>
            </View>
        )
    };
}