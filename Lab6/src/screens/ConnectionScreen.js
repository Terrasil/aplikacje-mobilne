import React, { Component } from 'react';
import { ScrollView, Text, View, Button } from 'react-native'
import NetInfo from "@react-native-community/netinfo";
import { ScreenStyle } from '../Styles';

export default class ConnectionScreen extends Component {
    state = {};
    componentDidMount() {
        this.fetchState();
    }
    fetchState = async () => {
        const state = await NetInfo.fetch();
        var tempState = JSON.stringify(state)
        this.setState(JSON.parse(tempState))
    };

    render(){ 
        var details = this.state.details ? JSON.parse(JSON.stringify(this.state.details,null)) : ''
        return (
            <>
                <View style={ScreenStyle.titleBox}>
                    <Text style={ScreenStyle.titleText}>Stan połączenia</Text>
                </View>
                <ScrollView contentContainerStyle={[ScreenStyle.scrollView,{flex:1,flexDirection: 'column'}]}>
                    <View style={ScreenStyle.contentBox}>  
                        <Text style={ScreenStyle.infoTextTitle}>Informacje o połączeniu</Text>
                        <Text style={ScreenStyle.infoText}>IP: {details.ipAddress}</Text>
                        <Text style={ScreenStyle.infoText}>Jakość: {details.strength}%</Text>
                        <Text style={ScreenStyle.infoText}>Częstotliwość: {details.frequency}MHz</Text>
                        <Text style={ScreenStyle.infoText}>Internet osiągalny: {this.state.isInternetReachable?`tak`:`nie`}</Text>
                        <Text style={ScreenStyle.infoText}>Typ: {this.state.type}</Text>
                        <Text style={ScreenStyle.infoText}>Połączony: {this.state.isConnected?`tak`:`nie`}</Text>
                        <Text style={ScreenStyle.infoText}>Wifi: {this.state.isWifiEnabled?`tak`:`nie`}</Text>
                        <Text/><Button
                            title='Odświerz dane'
                            style={ScreenStyle.button}
                            onPress={() => this.fetchState}
                        >
                        </Button>
                    </View>
                </ScrollView>
            </>
        )
    };
}