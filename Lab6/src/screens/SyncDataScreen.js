import React, {Component} from 'react';
import { Button, ScrollView, Text, ToastAndroid,TextInput, View, Switch } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Slider from '@react-native-community/slider';
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

export default class SyncDataScreen extends Component {
    /// dane lokaln przetrzymywane w AsyncStorage
    // zapisywanie
    storeData = async () => {
        var key = "localValue"
        var value = this.state.localValueBuffer
        try {
            await AsyncStorage.setItem(key,value).then(() => {
                alert(test)
            })
        } catch (error) {
            console.error(error)
        }
    };
    // odczytyanie
    retrieveData = async () => {
        var key = "localValue"
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                this.setState({showLocalValue:value})
            }else{
                this.setState({showLocalValue:'n/a'})
            }
        } catch (error) {
            this.setState({showLocalValue:error})
        }
    };
    // pobieranie danych z slidera
    sliderValue = async (value) => {
        var key = "localSlider"
        try {
            await AsyncStorage.setItem(key,value.toString());
        } catch (error) {
            console.error(error)
        }
        try {
            const tempValue = await AsyncStorage.getItem(key);
            if (tempValue !== null) {
                this.setState({showLocalSlider:tempValue})
            }else{
                this.setState({showLocalSlider:'n/a'})
            }
        } catch (error) {
            this.setState({showLocalSlider:error})
        }
    }
    state = {
        // dane do obsługi interakci z użytkownikiem
        internetConnection: true,
        showInfoModal:false,
        showInfoToast:false,
        localValueBuffer:'',
        showLocalValue:'',
        showLocalSlider:'',
        // danne dostepne przez internet
        remoteStorage: {
            remoteValue:'',
            remoteSlider:0,
        },
    }
    // funkcja sprawdzająca integralnośc danych lokalnych i zdalnych
    checkData = () =>{
        if(this.state.internetConnection){
            // połączenie z internetem
            // aktualizacja danych
            this.setState({remoteStorage:{remoteValue:this.state.showLocalValue,remoteSlider:this.state.showLocalSlider}})
        }else{
            // brak połączenia z internetem
            // nie aktualizuje danych
        }
    }
    componentDidMount(){
        //sprawdzanie stanu połączenia co sekundę
        setInterval(this.checkData, 1000)
    }
    render(){ 
        return (
            <>
                <View style={ScreenStyle.titleBox}>
                    <Text style={ScreenStyle.titleText}>Synchronizacja danych</Text>
                </View>
                <ScrollView contentContainerStyle={[ScreenStyle.scrollView,{flex:1,flexDirection: 'column'}]}>
                    <Text/>
                    <View>
                        <Text style={[ScreenStyle.infoText,{alignSelf:'center'}]}>Internet: {this.state.internetConnection?`ON `:`OFF`}</Text>
                    </View>
                    <View>
                        <Switch value={this.state.internetConnection} style={{alignSelf:'center'}} onValueChange={val =>{this.setState({showInfoToast:true, internetConnection: val})}}/>
                    </View>
                    <View style={ScreenStyle.section}>
                        <View style={[ScreenStyle.cenetrHorizontaly,{alignItems:'flex-start'}]}>
                            <Text style={ScreenStyle.textBold}>Zapisana wartość: {this.state.showLocalSlider}</Text>
                            <Slider
                                style={{width: 300, height: 40}}
                                minimumValue={0}
                                maximumValue={100}
                                step={1}
                                thumbTintColor='#08f'
                                minimumTrackTintColor="#08f"
                                maximumTrackTintColor="#000000"
                                onValueChange={this.sliderValue}
                            />
                        </View>
                    </View>
                    <View style={ScreenStyle.section}>
                        <View style={ScreenStyle.cenetrHorizontaly}>
                            <Text style={ScreenStyle.textBold}>Zapisana wartość: {this.state.showLocalValue}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <TextInput onEndEditing={event =>{this.setState({localValueBuffer: event.nativeEvent.text})}} placeholder="Podaj wartość" style={ScreenStyle.textInput}/>
                            </View>
                            <Button
                                title='Zapisz'
                                style={ScreenStyle.button}
                                onPress={
                                    this.storeData,
                                    this.retrieveData
                                }
                            >
                            </Button>
                        </View>
                    </View>
                    <View style={[ScreenStyle.section,{backgroundColor:'#048'}]}>
                        <Text/><Text style={ScreenStyle.titleText}>Podgląd w dane</Text>
                        <View style={[ScreenStyle.centerVerticaly,{justifyContent:'space-around'}]}>
                            <View style={[ScreenStyle.cenetrHorizontaly,{justifyContent:'space-around'}]}>
                                <Text style={[ScreenStyle.whiteText,ScreenStyle.textBold]}>STORAGE</Text>
                                <Text style={[ScreenStyle.whiteText,ScreenStyle.textBold]}>slider</Text>
                                <Text style={[ScreenStyle.whiteText,ScreenStyle.textBold]}>input</Text>
                            </View>
                            <View style={ScreenStyle.cenetrHorizontaly}>
                                <Text style={[ScreenStyle.whiteText,ScreenStyle.textBold]}>LOCAL</Text>
                                <Text style={ScreenStyle.whiteText}>{this.state.showLocalSlider}</Text>
                                <Text style={ScreenStyle.whiteText}>{this.state.showLocalValue}</Text>
                            </View>
                            <View style={ScreenStyle.cenetrHorizontaly}>
                                <Text style={[ScreenStyle.whiteText,ScreenStyle.textBold]}>REMOTE</Text>
                                <Text style={ScreenStyle.whiteText}>{this.state.remoteStorage.remoteSlider}</Text>
                                <Text style={ScreenStyle.whiteText}>{this.state.remoteStorage.remoteValue}</Text>
                            </View>
                        </View>
                    </View>
                    <Toast visible={this.state.showInfoToast} message={this.state.internetConnection?`Połączono z internetem`:`Brak połączenia z internetem`} />
                </ScrollView>
            </>
        )
    };
}