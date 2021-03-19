import React, {Component} from 'react';
import { ScrollView, Text, View } from 'react-native';
import DatePicker from 'react-native-datepicker'
import { ScreenStyle } from '../Styles';

export default class DatePickerScreen extends Component {
    constructor(props){
        super(props)
        this.state = {date: new Date()}
    }
    render(){ 
        return (
            <>
                <View style={ScreenStyle.titleBox}>
                    <Text style={ScreenStyle.titleText}>Komponent DatePicker</Text>
                </View>
                <ScrollView style={ScreenStyle.contentBox}>
                    <DatePicker
                        style={{width: "100%"}}
                        date={this.state.date}
                        mode="date"
                        format="DD-MM-YYYY"
                        onDateChange={(date) => {
                            this.setState({date: date});
                            alert(this.state.date)
                        }}
                    /><Text/>
                    <Text style={ScreenStyle.textBold}>Wybieranie daty za pomocą komponentu DatePicker</Text>
                    <Text>Domyślnie ustawiana jest dzisiejsza data.</Text>
                    <Text>Po kliknięciu w komponent wyskakuje nam klendasz gdzie wybieramy datę.</Text>
                    <Text>Następmnie gdy zatwierdzimy to wyświetla nam się alert z wybrana data a wartoś widoczna w komponęcie jest zmieniana.</Text>
                </ScrollView>
            </>
        )
    };
}