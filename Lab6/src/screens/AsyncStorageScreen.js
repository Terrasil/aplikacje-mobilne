import React, {Component, useEffect, useState } from 'react';
import { Button, ScrollView, Text, ToastAndroid,TextInput, View, } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScreenStyle } from '../Styles';

const Toast = ({ visible, message }) => {
    if (visible) {
        ToastAndroid.showWithGravityAndOffset(
            message,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
        );
        return null;
    }
    return null;
};

export default class AsyncStorageScreen extends Component {
    constructor(){
        super()
    }
    state = {
        showToast:false,
        saveKey:'',
        saveValue:'',
        readKey:''
    }
    storeData = async () => {
        var key = this.state.saveKey
        var value = this.state.saveValue
        try {
            await AsyncStorage.setItem(key,value);
            this.setState({showToast:true})
        } catch (error) {
            console.error(error)
        }
    };
    retrieveData = async () => {
        var key = this.state.readKey
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                alert('Klucz:'+key+' Wartość:'+value);
            }else{
                alert('Nie znaleziono elementu');
            }
        } catch (error) {
            console.error(error)
        }
    };
    render(){ 
        return (
            <>
                <View style={ScreenStyle.titleBox}>
                    <Text style={ScreenStyle.titleText}>Zapis danych</Text>
                </View>
                <ScrollView contentContainerStyle={[ScreenStyle.scrollView,{flex:1,flexDirection: 'column'}]}>
                    <View style={ScreenStyle.section}>
                        <View style={ScreenStyle.cenetrHorizontaly}>
                            <Text style={ScreenStyle.textBold}>Podaj wartość do zapisania</Text>
                            <View style={{flexDirection: 'row'}}>
                                <TextInput onEndEditing={event =>{this.setState({saveKey: event.nativeEvent.text})}} placeholder="Podaj klucz" style={ScreenStyle.textInput}/>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <TextInput onEndEditing={event =>{this.setState({saveValue: event.nativeEvent.text})}} placeholder="Wpisz wartość" style={ScreenStyle.textInput}/>
                            </View>
                            <Button
                                title='Dodaj wartość'
                                style={ScreenStyle.button}
                                onPress={this.storeData}
                            >
                            </Button>
                        </View>
                    </View>
                    <View style={ScreenStyle.section}>
                        <View style={ScreenStyle.cenetrHorizontaly}>
                            <Text style={ScreenStyle.textBold}>Podaj wartość do odczytania</Text>
                            <View style={{flexDirection: 'row'}}>
                                <TextInput onEndEditing={event =>{this.setState({readKey: event.nativeEvent.text})}} placeholder="Podaj klucz" style={ScreenStyle.textInput}/>
                            </View>
                            <Button
                                title='Wyświetl'
                                style={ScreenStyle.button}
                                onPress={this.retrieveData}
                            >
                            </Button>
                            <Toast visible={this.state.showToast} message={"Zapisano "+this.state.saveKey+" jako "+this.state.saveValue} />
                        </View>
                    </View>
                </ScrollView>
            </>
        )
    };
}