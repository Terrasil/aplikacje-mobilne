import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Przycisk} from './Przycisk'

export default function Kalkulator() {
    return (
      <View style={stylez.container}>
        <Text>Kalkulator</Text>
      </View>
    );
}

const stylez = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});