import React, {Component } from 'react';
import { ScrollView, Text, View,TouchableOpacity, TouchableHighlight, Button, TextInput, Modal  } from 'react-native';
import { set } from 'react-native-reanimated';
import {WebView} from "react-native-webview";
import { ScreenStyle } from '../Styles';

export default class TouchableScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            countTouchableOpacity : 0,
            countTouchableHighlight : 0,
            searchPhasese:'',
            showBrowser: false,
        };
    }

    onPressTouchableOpacity = () => {
        this.setState({
            countTouchableOpacity: this.state.countTouchableOpacity + 1
        });
    };
    onPressTouchableHighlight = () => {
        this.setState({
            countTouchableHighlight: this.state.countTouchableHighlight + 1
        });
    };
    onPressSearch = () => {
    };

    renderBrowser() {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.showBrowser}
                onRequestClose={() => {
                    this.setState({showBrowser: !showBrowser});
                }}
            >
                <Button
                    title='WRÓĆ'
                    style={ScreenStyle.button}
                    onPress={() => this.setState({showBrowser: false})}
                >
                </Button>
                <WebView
                    source={{
                        uri: 'https://www.google.com/search?q=' + this.state.searchPhasese,
                    }}
                    onNavigationStateChange={this.onNavigationStateChange}
                    startInLoadingState
                    scalesPageToFit
                    javaScriptEnabled
                    style={{ flex: 1}}
                />
            </Modal>
        );
    }

    render(){ 
        return (
            <>
                <View style={ScreenStyle.titleBox}>
                    <Text style={ScreenStyle.titleText}>Komponenty Touchable</Text>
                </View>
                { this.state.showBrowser && this.renderBrowser() }
                <ScrollView contentContainerStyle={[ScreenStyle.scrollView,{flex:1,flexDirection: 'column'}]}>
                    <View style={ScreenStyle.section}>
                        <View style={ScreenStyle.cenetrHorizontaly}>
                            <View style={[ScreenStyle.centerVerticaly,{alignItems:'flex-end'}]}>
                                <TouchableOpacity
                                    style={ScreenStyle.button}
                                    onPress={this.onPressTouchableOpacity}
                                >
                                    <Text>Kliknij w TouchableOpacity</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[ScreenStyle.centerVerticaly,{alignItems:'flex-start'}]}>
                                <Text style={ScreenStyle.textBold}>{`countTouchableOpacity`}: </Text><Text> {this.state.countTouchableOpacity}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={ScreenStyle.section}>
                        <View style={ScreenStyle.cenetrHorizontaly}>
                            <View style={[ScreenStyle.centerVerticaly,{alignItems:'flex-end'}]}>
                                <TouchableHighlight
                                    style={ScreenStyle.button}
                                    onPress={this.onPressTouchableHighlight}
                                >
                                    <Text>Kliknij w TouchableHighlight</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={[ScreenStyle.centerVerticaly,{alignItems:'flex-start'}]}>
                                <Text style={ScreenStyle.textBold}>{`countTouchableHighlight`}: </Text><Text> {this.state.countTouchableHighlight}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={ScreenStyle.section}>
                        <View style={ScreenStyle.cenetrHorizontaly}>
                            <View style={[ScreenStyle.centerVerticaly,{alignItems:'flex-end'}]}>
                                <TextInput onEndEditing={event =>{this.setState({searchPhasese: event.nativeEvent.text})}} style={ScreenStyle.textInput}/>
                            </View>
                            <View style={[ScreenStyle.centerVerticaly,{alignItems:'flex-start'}]}>
                                <Button
                                    title='Wyszukaj w Google'
                                    style={ScreenStyle.button}
                                    onPress={() => this.setState({showBrowser: true})}
                                >
                                </Button>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </>
        )
    };
}