import React, {Component } from 'react';
import { ScrollView, Image, Text, View  } from 'react-native';
import Slider from '@react-native-community/slider';
import jezioro from '../../assets/jezioro.jpg'; 
import { ScreenStyle } from '../Styles';

export default class ResizeScreen extends Component {
    state = {
        firstImageScale: 1,
        secondImageScale: 0
    }
    resizeFirstImage = (value) => {
        this.setState({firstImageScale: value});
    }
    resizeSecondImage = (value) => {
        this.setState({secondImageScale: 1 - value});
    }
    render(){ 
        return (
            <>
                <View style={ScreenStyle.titleBox}>
                    <Text style={ScreenStyle.titleText}>Zmiana rozmiaru</Text>
                </View>
                <ScrollView contentContainerStyle={[ScreenStyle.scrollView,{flex:1,flexDirection: 'column'}]}>
                    <View style={ScreenStyle.section}>
                        <View style={ScreenStyle.cenetrHorizontaly}>
                            <Text style={ScreenStyle.textBold}>Obraz ładowany z uri</Text>
                            <Image source={{ uri: "https://infogdansk.pl/wp-content/uploads/2020/05/jezioro_osowskie-870x500.jpg" }} style={[ScreenStyle.image, {transform: [{ scale: this.state.firstImageScale }]}]} /> 
                            <Slider
                                style={{width: 400, height: 40}}
                                value={1}
                                minimumValue={0}
                                maximumValue={1}
                                thumbTintColor='#08f'
                                minimumTrackTintColor="#08f"
                                maximumTrackTintColor="#000000"
                                onValueChange={this.resizeFirstImage}
                            />
                        </View>
                    </View>
                    <View style={ScreenStyle.section}>
                        <View style={ScreenStyle.cenetrHorizontaly}>
                            <Text style={ScreenStyle.textBold}>Obraz ładowany z /assets</Text>
                            <Image source={jezioro} style={ScreenStyle.image} style={[ScreenStyle.image, {transform: [{ scale: this.state.secondImageScale }]}]}/> 
                            <Slider
                                style={{width: 400, height: 40}}
                                value={1}
                                minimumValue={0}
                                maximumValue={1}
                                thumbTintColor='#08f'
                                minimumTrackTintColor="#08f"
                                maximumTrackTintColor="#000000"
                                onValueChange={this.resizeSecondImage}
                            />
                        </View>
                    </View>
                </ScrollView>
            </>
        )
    };
}