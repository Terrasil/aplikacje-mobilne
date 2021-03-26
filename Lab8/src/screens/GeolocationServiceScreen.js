import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import * as Permissions from 'expo-permissions';
import Geolocation from 'react-native-geolocation-service';
import {ScreenStyle} from '../Styles'

export default class GeolocationServiceScreen extends Component {
    componentDidMount() {
        this.setState({ loading: true }, () => {
            Geolocation.getCurrentPosition(
                (position) => {
                    this.setState({  loading: false });
                    console.log(position);
                },
                (error) => {
                    this.setState({ loading: false });
                    console.log(error);
                },
            );
        });
    }

    render() {
        return (
            <>
                <View style={ScreenStyle.titleBox}>
                    <Text style={ScreenStyle.titleText}>Lokalizaczja react-native-geolocation-service</Text>
                </View>
                <ScrollView contentContainerStyle={[ScreenStyle.scrollView,{flex:1,flexDirection: 'column'}]}>
                <View style={ScreenStyle.section}>
                        <View style={ScreenStyle.cenetrHorizontaly}>
                            <View style={[ScreenStyle.centerVerticaly,{alignItems:'center'}]}>
                            </View>
                        </View>
                    </View>
                    <View style={ScreenStyle.section}>
                        <View style={ScreenStyle.cenetrHorizontaly}>
                            <View style={[ScreenStyle.centerVerticaly,{alignItems:'center'}]}>
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