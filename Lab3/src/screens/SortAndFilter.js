import React, {Component} from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ScreenStyle } from '../Styles';

const ListaLiczb = ({ style, textStyle, liczby }) => {
    var index = 0
    if (liczby.length > 0) {
        return (
            <ScrollView style={style}>
             {liczby.map(liczba => <Text key={index++} style={textStyle}>{liczba}</Text>)}
            </ScrollView>
        );
    }
  
    return (
        <ScrollView style={style}>
            <Text key={index} style={textStyle}>Brak liczb</Text>
        </ScrollView>
    );
  };

export default class SortAndFilter extends Component {
    constructor() {
        super();
    
        const iloscLiczb = 100
        const maksymalnaWartosc = 1000
        const tablicaLiczb = []; 

        // generowanie losowych liczb 
        for (let i = 0; i < iloscLiczb; i++) {
            tablicaLiczb.push(Math.floor(Math.random() * maksymalnaWartosc));
        }

        this.state = { tablicaLiczb };
    }

    sortowanie = () =>{
        this.state.tablicaLiczb.sort((a,b) => a > b ? 1:-1)
        this.forceUpdate()
    }
    
    random = (ilosc, max) => () =>{
        const noweLiczby = []
        for (let i = 0; i < ilosc; i++) {
            noweLiczby.push(Math.floor(Math.random() * max));
        }
        this.state.tablicaLiczb = noweLiczby
        this.forceUpdate()
    }

    render(){ 
        return (
            <View style={ScreenStyle.view}>
                <View style={[ScreenStyle.content, {flex:0.1}]}>
                    <Text>Lista wyświetla 100 randomowo wygenerowanych liczb z przedziału 0 - 1000.</Text>
                </View>
                <View style={[ScreenStyle.sort, {flex:0.05}]}>
                    <TouchableOpacity style={ScreenStyle.button} onPress={this.sortowanie}>
                        <Text style={ScreenStyle.sortText}>Sortuj</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ScreenStyle.button} onPress={this.random(100, 1000)}>
                        <Text style={ScreenStyle.sortText}>Randomizuj</Text>
                    </TouchableOpacity>
                </View>
                <View style={ScreenStyle.content}>
                    <ListaLiczb textStyle={ScreenStyle.item} liczby={this.state.tablicaLiczb} />
                </View>
            </View>
        )
    };
}