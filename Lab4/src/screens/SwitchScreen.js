import React, {Component,useState} from 'react';
import { ScrollView, Modal, Switch, Text, View } from 'react-native';
import { ScreenStyle } from '../Styles';

const CustomSwitch = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
        <>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
            <Modal
                animationType="slide"
                transparent={false}
                visible={isSwitchOn}
                onRequestClose={() => {
                    setModalVisible(!isSwitchOn);
                }}
            >
                <View style={ScreenStyle.centerVerticaly}>
                    <View style={ScreenStyle.cenetrHorizontaly}>
                        <Text onPress={onToggleSwitch} style={ScreenStyle.hugeText}>{Math.floor(Math.random()*100)}</Text>
                    </View>
                </View>
            </Modal> 
        </>
    );
};

export default class SwitchScreen extends Component {
    render(){ 
        return (
            <>
                <View style={ScreenStyle.titleBox}>
                    <Text style={ScreenStyle.titleText}>Komponenty Switch i Modal</Text>
                </View>
                <ScrollView style={ScreenStyle.contentBox}>
                    <CustomSwitch/><Text/>
                    <Text style={ScreenStyle.textBold}>Wyświetlanie liczby pseudolosowej w Modal'u</Text>
                    <Text>Po przełączeniu switch w górnym prawym rogu okna pojawi się Modal z losową liczbą z przedziału 0 - 100.</Text>
                    <Text>Kliknięcie w wyświetloną liczbę zamknie modal.</Text>
                </ScrollView>
            </>
        )
    };
}