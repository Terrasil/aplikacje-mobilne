import React, {Component } from 'react';
import { ScrollView, Image, Text, View } from 'react-native'
import { Feather, AntDesign,Entypo } from '@expo/vector-icons';
import thumbnail from '../../assets/favicon.png'; 
import { ScreenStyle } from '../Styles';

export default class LazyLoadingAndIcons extends Component {
    
    render(){ 
        return (
            <>
                <View style={ScreenStyle.titleBox}>
                    <Text style={ScreenStyle.titleText}>Leniwe ładowanie i ikony</Text>
                </View><ScrollView contentContainerStyle={[ScreenStyle.scrollView,{flex:1,flexDirection: 'column'}]}>
                    <View style={ScreenStyle.section}>
                        <View style={ScreenStyle.cenetrHorizontaly}>
                            <Text style={ScreenStyle.textBold}>Obraz ładowany z uri</Text>
                            <Image loadingIndicatorSource={thumbnail} source={{ uri: "https://wallpaper.dog/large/20467117.jpg" }} style={ScreenStyle.image} progressiveRenderingEnabled={false}/>
                        </View>
                    </View> 
                    <View style={ScreenStyle.section}>
                        <Text style={ScreenStyle.textBold}>Przykładowe ikony</Text>    
                        <View style={ScreenStyle.centerVerticaly}>
                            <Feather name="feather" size={24} color="black" />
                            <Feather name="loader" size={24} color="black" />
                            <Feather name="lock" size={24} color="black" />
                            <Feather name="map" size={24} color="black" />
                            <Feather name="map-pin" size={24} color="black" />
                            <Feather name="monitor" size={24} color="black" />
                            <Feather name="moon" size={24} color="black" />
                            <Feather name="music" size={24} color="black" />
                            <Feather name="phone" size={24} color="black" />
                            <AntDesign name="bars" size={24} color="black" />
                            <AntDesign name="clockcircleo" size={24} color="black" />
                            <AntDesign name="swap" size={24} color="black" />
                        </View>
                        <View style={ScreenStyle.centerVerticaly}>
                            <AntDesign name="plussquareo" size={24} color="black" />
                            <Feather name="mail" size={24} color="black" />
                            <Feather name="link" size={24} color="black" />
                            <AntDesign name="linechart" size={24} color="black" />
                            <Feather name="home" size={24} color="black" />
                            <AntDesign name="laptop" size={24} color="black" />
                            <AntDesign name="staro" size={24} color="black" />
                            <Feather name="filter" size={24} color="black" />
                            <Feather name="meh" size={24} color="black" />
                            <AntDesign name="shoppingcart" size={24} color="black" />
                            <Feather name="user" size={24} color="black" />
                            <AntDesign name="videocamera" size={24} color="black" />
                        </View>
                        <View style={ScreenStyle.centerVerticaly}>
                            <AntDesign name="team" size={24} color="black" />
                            <AntDesign name="sharealt" size={24} color="black" />
                            <Feather name="settings" size={24} color="black" />
                            <AntDesign name="picture" size={24} color="black" />
                            <Feather name="inbox" size={24} color="black" />
                            <AntDesign name="cloudo" size={24} color="black" />
                            <AntDesign name="tagso" size={24} color="black" />
                            <AntDesign name="enviromento" size={24} color="black" />
                            <AntDesign name="eyeo" size={24} color="black" />
                            <AntDesign name="camerao" size={24} color="black" />
                            <AntDesign name="windows" size={24} color="black" />
                            <AntDesign name="export" size={24} color="black" />
                        </View>
                        <View style={ScreenStyle.centerVerticaly}>
                            <AntDesign name="hdd" size={24} color="black" />
                            <AntDesign name="ie" size={24} color="black" />
                            <Feather name="delete" size={24} color="black" />
                            <AntDesign name="pushpino" size={24} color="black" />
                            <AntDesign name="hearto" size={24} color="black" />
                            <AntDesign name="calculator" size={24} color="black" />
                            <Feather name="chrome" size={24} color="black" />
                            <Feather name="github" size={24} color="black" />
                            <AntDesign name="piechart" size={24} color="black" />
                            <AntDesign name="codesquare" size={24} color="black" />
                            <AntDesign name="file1" size={24} color="black" />
                            <AntDesign name="folder1" size={24} color="black" />
                        </View>
                        <View style={ScreenStyle.centerVerticaly}>
                            <AntDesign name="search1" size={24} color="black" />
                            <Feather name="calendar" size={24} color="black" />
                            <AntDesign name="dingding" size={24} color="black" />
                            <AntDesign name="mobile1" size={24} color="black" />
                            <AntDesign name="bells" size={24} color="black" />
                            <AntDesign name="database" size={24} color="black" />
                            <AntDesign name="barcode" size={24} color="black" />
                            <AntDesign name="hourglass" size={24} color="black" />
                            <AntDesign name="key" size={24} color="black" />
                            <AntDesign name="flag" size={24} color="black" />
                            <AntDesign name="layout" size={24} color="black" />
                            <AntDesign name="printer" size={24} color="black" />
                        </View>
                        <View style={ScreenStyle.centerVerticaly}>
                            <AntDesign name="USB" size={24} color="black" />
                            <AntDesign name="skin" size={24} color="black" />
                            <AntDesign name="car" size={24} color="black" />
                            <AntDesign name="tool" size={24} color="black" />
                            <AntDesign name="isv" size={24} color="black" />
                            <AntDesign name="gift" size={24} color="black" />
                            <AntDesign name="idcard" size={24} color="black" />
                            <AntDesign name="rest" size={24} color="black" />
                            <AntDesign name="Safety" size={24} color="black" />
                            <AntDesign name="wallet" size={24} color="black" />
                            <AntDesign name="Trophy" size={24} color="black" />
                            <AntDesign name="like2" size={24} color="black" />
                        </View>
                        <View style={ScreenStyle.centerVerticaly}>
                            <AntDesign name="bulb1" size={24} color="black" />
                            <AntDesign name="rocket1" size={24} color="black" />
                            <AntDesign name="apple-o" size={24} color="black" />
                            <AntDesign name="android" size={24} color="black" />
                            <AntDesign name="poweroff" size={24} color="black" />
                            <AntDesign name="find" size={24} color="black" />
                            <AntDesign name="sound" size={24} color="black" />
                            <AntDesign name="earth" size={24} color="black" />
                            <AntDesign name="wifi" size={24} color="black" />
                            <AntDesign name="sync" size={24} color="black" />
                            <AntDesign name="message1" size={24} color="black" />
                            <AntDesign name="shake" size={24} color="black" />
                        </View>
                        <View style={ScreenStyle.centerVerticaly}>
                            <AntDesign name="API" size={24} color="black" />
                            <AntDesign name="fork" size={24} color="black" />
                            <AntDesign name="contacts" size={24} color="black" />
                            <AntDesign name="edit" size={24} color="black" />
                            <AntDesign name="warning" size={24} color="black" />
                            <AntDesign name="table" size={24} color="black" />
                            <AntDesign name="dashboard" size={24} color="black" />
                            <AntDesign name="google" size={24} color="black" />
                            <AntDesign name="dropbox" size={24} color="black" />
                            <AntDesign name="HTML" size={24} color="black" />
                            <AntDesign name="slack" size={24} color="black" />
                            <Entypo name="baidu" size={24} color="black" />
                        </View>
                        <Text/><Text/>
                    </View>
                </ScrollView>
            </>
        )
    };
}