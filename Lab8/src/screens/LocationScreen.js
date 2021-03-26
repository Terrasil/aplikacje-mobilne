import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import MapView from 'react-native-maps';
import {ScreenStyle} from '../Styles'

export default class LocationScreen extends Component {
    state = {
        location:{},
        errorMessage:''
    }
    
    componentDidMount(){
        this.getLocation()
    }

    getLocation = async () => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        if(status!== 'granted'){
            console.log('PERMISSION NOT GRANTED')
            this.setState({errorMessage:'PERMISSION NOT GRANTED'})
        }else{
            console.log('PERMISSION IS GRANTED')
        }
        //const networking = await Location.enableNetworkProviderAsync()
        let gpsServiceStatus = await Location.hasServicesEnabledAsync();
        if (gpsServiceStatus) {
        const location = await Location.getCurrentPositionAsync({})
            //this.setState({networking})
            this.setState({location})
        }
    }

    render() {
        return (
            <>
                <View style={ScreenStyle.titleBox}>
                    <Text style={ScreenStyle.titleText}>Lokalizaczja expo-location</Text>
                </View>
                <ScrollView contentContainerStyle={[ScreenStyle.scrollView,{flex:1,flexDirection: 'column'}]}>
                <View style={ScreenStyle.section}>
                        <View style={ScreenStyle.cenetrHorizontaly}>
                            <View style={[ScreenStyle.centerVerticaly,{alignItems:'center'}]}>
                            <Text style={styles.paragraph}>{this.state.errorMessage}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={ScreenStyle.section}>
                        <View style={ScreenStyle.cenetrHorizontaly}>
                            <View style={[ScreenStyle.centerVerticaly,{alignItems:'center'}]}>
                                <Text>{JSON.stringify(this.state.location)}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </>
        );
    }
}
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      textAlign: 'center',
    },
});