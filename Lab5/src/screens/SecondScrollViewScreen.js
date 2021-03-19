import React, {Component, useEffect } from 'react';
import { ScrollView, Text, View,LogBox  } from 'react-native';
import ScrollViewIndicator from 'react-native-scroll-indicator';
import { ScreenStyle } from '../Styles';


export default class SecondScrollViewScreen extends Component {
    componentDidMount() {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }
    render(){ 
        return (
            <>
                <View style={ScreenStyle.titleBox}>
                    <Text style={ScreenStyle.titleText}>Drugi ScrollView</Text>
                </View>
                <ScrollViewIndicator style={ScreenStyle.scrollViewIndicator} scrollViewStyle={ScreenStyle.scrollViewStyle} scrollIndicatorContainerStyle={ScreenStyle.scrollIndicatorContainerStyle} scrollIndicatorStyle={ScreenStyle.scrollIndicatorStyle}>
                    <View style={[ScreenStyle.viewBox, { backgroundColor: "lime" }]}/>
                    <View style={[ScreenStyle.viewBox, { backgroundColor: "orange" }]}/>
                    <View style={[ScreenStyle.viewBox, { backgroundColor: "darkorange" }]}/>
                    <View style={[ScreenStyle.viewBox, { backgroundColor: "steelblue" }]}/>
                    <View style={[ScreenStyle.viewBox, { backgroundColor: "magenta" }]}/>
                    <View style={[ScreenStyle.viewBox, { backgroundColor: "purple" }]}/>
                    <View style={[ScreenStyle.viewBox, { backgroundColor: "orangered" }]}/>
                    <View style={[ScreenStyle.viewBox, { backgroundColor: "mediumseagreen" }]}/>
                    <View style={[ScreenStyle.viewBox, { backgroundColor: "yellow" }]}/>
                    <View style={[ScreenStyle.viewBox, { backgroundColor: "green" }]}/>
                </ScrollViewIndicator>
            </>
        )
    };
}