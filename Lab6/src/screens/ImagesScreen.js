import React, {Component } from 'react';
import { ScrollView, Image, Text, View  } from 'react-native';
import jezioro from '../../assets/jezioro.jpg'; 
import { ScreenStyle } from '../Styles';

export default class ImagesScreen extends Component {
    render(){ 
        return (
            <>
                <View style={ScreenStyle.titleBox}>
                    <Text style={ScreenStyle.titleText}>Obrazy</Text>
                </View><ScrollView contentContainerStyle={[ScreenStyle.scrollView,{flex:1,flexDirection: 'column'}]}>
                    <View style={ScreenStyle.section}>
                        <View style={ScreenStyle.cenetrHorizontaly}>
                            <Text style={ScreenStyle.textBold}>Obraz ładowany z /assets</Text>
                            <Image source={jezioro} style={ScreenStyle.image} /> 
                        </View>
                    </View>
                    <View style={ScreenStyle.section}>
                        <View style={ScreenStyle.cenetrHorizontaly}>
                            <Text style={ScreenStyle.textBold}>Obraz ładowany z uri</Text>
                            <Image source={{ uri: "https://infogdansk.pl/wp-content/uploads/2020/05/jezioro_osowskie-870x500.jpg" }} style={ScreenStyle.image} /> 
                        </View>
                    </View>
                </ScrollView>
            </>
        )
    };
}