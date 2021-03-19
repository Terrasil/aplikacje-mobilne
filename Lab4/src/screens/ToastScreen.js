import React, {Component, useEffect, useState} from 'react';
import { ScrollView,Button, Modal,ToastAndroid, Text, View } from 'react-native';
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


const ToastButton = () => {
    const [visibleToast, setVisibleToast] = useState(false);
    useEffect(() => setVisibleToast(false), [visibleToast]);
    const handleButtonPress = () => {
      setVisibleToast(true);
    };
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  
    // Obsługa czasu
    const [time, setTime] = useState(0);

    // Wywoywanie Promise
    var promise = null
    const createPromise = () => {
        var tempTime = Math.floor(Math.random()*10000)
        setTime(tempTime)
        promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('hide');
            }, tempTime);
        });
    }

    return (
        <View style={ScreenStyle.container}>
            <Toast visible={visibleToast} message="Przykładowy toast" />
            <Button title="WYŚWIETL TOAST I MODAL" onPress={() => {
                onToggleSwitch()
                handleButtonPress()
                createPromise()
                // Oczekiwanie na timeout z promise
                // Jeżeli otrzyma 'hide' to ukrywa modal
                promise.then((value) => {
                    if(value == 'hide'){
                        setIsSwitchOn(false)
                    }
                });
            }}/>
            <Modal
                animationType="slide"
                transparent={false}
                visible={isSwitchOn}
                onRequestClose={() => {
                    setModalVisible(!isSwitchOn);
                }}
            >
                <View style={[ScreenStyle.centerVerticaly,{backgroundColor:'#bbb'}]}>
                    <View style={ScreenStyle.cenetrHorizontaly}>
                        <Text onPress={onToggleSwitch} style={ScreenStyle.bigText}>{time} ms</Text>
                    </View>
                </View>
            </Modal> 
        </View>
    );
};
export default class ToastScreen extends Component {
    render() {
      return (
        <>
            <View style={ScreenStyle.titleBox}>
                <Text style={ScreenStyle.titleText}>Komponent TextInput</Text>
            </View>
            <ScrollView style={ScreenStyle.contentBox}>
                <ToastButton/><Text/>
                <Text style={ScreenStyle.textBold}>Po naciśnięciu przycisku powyżej pojawi się ToastAndroid oraz Modal który zostanie ukryty po czasie.</Text>
                <Text>Modal jest skopiowany z przykładu z Switch'em jednak z ciemniejszym tłem aby było widać lepiej Toast.</Text>
                <Text>Na modalu wyświetla się wygenerowany czas w milisekundach od 0 - 10000. Ten czas oznacza za ile modal zostanie zamknięty.</Text>
                <Text>Za zamknięcie Modala odpowiada oczekiwanie na Promise. Jeżeli otrzyma wartość 'hide' to go ukryje.</Text>
            </ScrollView>
        </>
      );
    }
}
