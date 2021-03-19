import React, {Component} from 'react';
import { ScrollView, Text, View } from 'react-native';
import { ScreenStyle } from '../Styles';

export default class FirstScrollViewScreen extends Component {
    render(){ 
        return (
            <>
                <View style={ScreenStyle.titleBox}>
                    <Text style={ScreenStyle.titleText}>Pierwszy ScrollView</Text>
                </View>
                <ScrollView contentContainerStyle={ScreenStyle.scrollView}>
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
                </ScrollView>
            </>
        )
    };
}