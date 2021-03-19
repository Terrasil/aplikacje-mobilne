import React, {Component} from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { ScreenStyle } from '../Styles';

export default class TextInputsScreen extends Component {
    render(){ 
        return (
            <>
                <View style={ScreenStyle.titleBox}>
                    <Text style={ScreenStyle.titleText}>Komponent TextInput</Text>
                </View>
                <ScrollView style={ScreenStyle.contentBox}>
                    <>
                        <Text style={ScreenStyle.textBold}>Podstawowy TextInput</Text>
                        <TextInput style={ScreenStyle.textInput}/><Text/>
                    </>
                    <>
                        <Text style={ScreenStyle.textBold}>TextInput z placeholder'em</Text>
                        <Text>placeholder="Placeholder"</Text>
                        <TextInput placeholder="Placeholder" style={ScreenStyle.textInput}/><Text/>
                    </>
                    <>
                        <Text style={ScreenStyle.textBold}>TextInput z ustawioną wartością (nie mozna zmienic)</Text>
                        <Text>value="Ustawiona wartość"</Text>
                        <TextInput value="Ustawiona wartość" style={ScreenStyle.textInput}/><Text/>
                    </>
                    <>
                        <Text style={ScreenStyle.textBold}>TextInput z wartością domyślną</Text>
                        <Text>defaultValue="Domyślna wartość"</Text>
                        <TextInput defaultValue="Domyślna wartość" style={ScreenStyle.textInput}/><Text/>
                    </>
                    <>
                        <Text style={ScreenStyle.textBold}>TextInput z klawiaturą numeryczną</Text>
                        <Text>keyboardType="numeric"</Text>
                        <TextInput keyboardType="numeric" style={ScreenStyle.textInput}/><Text/>
                    </>
                    <>
                        <Text style={ScreenStyle.textBold}>TextInput zablokowany</Text>
                        <Text>editable=false</Text>
                        <TextInput editable={false} style={ScreenStyle.textInput}/><Text/>
                    </>
                    <>
                        <Text style={ScreenStyle.textBold}>TextInput z limitem długośći (10)</Text>
                        <Text>maxLength=10</Text>
                        <TextInput maxLength={10} style={ScreenStyle.textInput}/><Text/>
                    </>
                    <>
                        <Text style={ScreenStyle.textBold}>TextInput z wieloma liniami (3)</Text>
                        <Text>multiline=true</Text>
                        <Text>numberOfLines=3</Text>
                        <TextInput multiline={true} numberOfLines={3} style={[ScreenStyle.textInput,{textAlignVertical : "top"}]}/><Text/>
                    </>
                    <>
                        <Text style={ScreenStyle.textBold}>TextInput z przykładową metodą wyswietlającą alert po zakończeniu pisania</Text>
                        <Text>{`onEndEditing={ event => { alert(event.nativeEvent.text) }}`}</Text>
                        <TextInput onEndEditing={event =>{alert(event.nativeEvent.text)}} style={ScreenStyle.textInput}/><Text/>
                    </>
                </ScrollView>
            </>
        )
    };
}