# Aplikacje mobilne
### Laboratorium 4

### Autor: Patryk Morawski, 185ic_a1

## Narzędzia

Jako podstawę aplikacji wykorzystałem kod z [Lab3](https://github.com/Terrasil/aplikacje-mobilne/tree/main/Lab3) z lekko poprawionym frontendem.

Dla wygody wszędzie wykorzystano komponent ***ScrollView***

#### Dodatkowe moduły

 - @react-native-picker/picker
 
 ``` npm install @react-native-picker/picker ```

 - react-native-datepicker
 
 ``` npm install react-native-datepicker ```
 
#### Struktura plików:
```
  ./src
   ├── /screens
   │   ├── DatePickerScreen.js
   │   ├── SelectsScreen.js
   │   ├── SwitchScreen.js
   │   ├── TextInputsScreen.js
   │   └── ToastScreen.js
   ├── Main.js
   └── Styles.js
```
## Działanie

Aplikacja ma przygotowane 5 ekranów.

- **Komponent TextInput** - przedstawia najważniejsze propsy dla tytułowego komponentu i sposob wykoszystania zdarzeń.
- **Komponent Select** - przedstawia wykorzystanie Pickera jako komponentu Select z wykorzystaniem asynchronicznego ładowania danych za pomocą *fetch()*.
- **Komponenty Switch i Modal** - przedstawia wywoływanie komponentu Modal przy zmianie stanu switch'a, dodatkowo dodano wyświetlenie pseudolodowej liczby za kazdym razem.
- **Komponent DatePicker** - przedstawia komponent DatePicker który domyslnie pobiera aktualną datę a przy jej zmianie uruchamia alert.
- **Komponent Modal z Toast** - przedstawia przycisk którego wciśnięcie spowoduje pojawienie się Modala i Toasta. Modal wyświetla czas do jego zamknięcia które jest obsługiwane za pomocą objektu *Promise*.

## App.js

Główny widok aplikacji posiada nawigator jednak wyświetlany jest domyślnie komponent ***Main***

```js
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { AppStyle } from './src/Styles';
import Main from './src/Main'

export default function App() {
  return (
    <SafeAreaView style={AppStyle.safeArea}>
      <Main></Main>
    </SafeAreaView>
  );
}
```

## Main.js

Zawiera **Drawer** (Dziala jak Router w *Node.js*)

```js
import React, {Component} from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TextInputsScreen from './screens/TextInputsScreen'
import SelectsScreen from './screens/SelectsScreen'
import SwitchScreen from './screens/SwitchScreen'
import DatePickerScreen from './screens/DatePickerScreen'
import ToastScreen from './screens/ToastScreen'

const Drawer = createDrawerNavigator();

export default class Main extends Component {
    render(){ 
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Komponent TextInput">
                    <Drawer.Screen name="Komponent TextInput" component={TextInputsScreen} />
                    <Drawer.Screen name="Komponent Select" component={SelectsScreen} />
                    <Drawer.Screen name="Komponenty Switch i Modal" component={SwitchScreen} />
                    <Drawer.Screen name="Komponent DatePicker" component={DatePickerScreen} />
                    <Drawer.Screen name="Komponent Modal z Toast" component={ToastScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    };
}
```

![Main](https://i.imgur.com/BQQRO99.png)

## Styles.js

Zawiera style do uzywanych komponentów:
 - ***AppStyle*** czyli ***styles.app*** zawiera style do ***App.js***
 - ***ScreenStyle*** czyli ***styles.screen*** zawiera style do komponentów w ***/screens***

```js
import { StyleSheet } from 'react-native';

const styles = {}

styles.app = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#222',
        marginTop:'12%',
    },
})

styles.screen = StyleSheet.create({
    titleBox:{
        backgroundColor: '#08f',
        height:'8%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerVerticaly:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cenetrHorizontaly:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText:{
        color:'#fff',
        fontSize:20,
    },
    contentBox:{
        alignSelf:'stretch',
        padding:'3%',
    },
    textBold:{
        fontWeight:'bold',
    },
    hugeText:{
        flex: 1,
        fontWeight:'bold',
        fontSize:200,
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical : "center",
    },
    bigText:{
        flex: 1,
        fontWeight:'bold',
        fontSize:100,
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical : "center",
    },
    textInput:{
        backgroundColor: '#ddd',
        marginVertical:'2%',
        padding:'3%',
    }
})
  
export const AppStyle = styles.app
export const ScreenStyle = styles.screen
```


# Komponenty

## TextInputsScreen.js

W tym ekranie przedstawiono wykorzysanie najistotniejszych propsów takich jak *placeholder*, *value*, *defaultValue*, *editable*, *maxLength*, *multiline*, *numberOfLines* oraz jedno przykładowe zdarzenie *onEndEditing* które wyswietla w alercie wprowadzoną wartoś (alert wyświetla się po zakońzceniu wprowadzania)

```js
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
                        <Text>onEndEditing = event => alert(event.nativeEvent.text)</Text>
                        <TextInput onEndEditing={event =>{alert(event.nativeEvent.text)}} style={ScreenStyle.textInput}/><Text/>
                    </>
                </ScrollView>
            </>
        )
    };
}
```

#### Widok podstawowy
![TextInputsScreen1](https://i.imgur.com/2Y1R7zh.png)

#### Domyślna klawiatura do wprowadzania danych
![TextInputsScreen2](https://i.imgur.com/LwlecmH.png)

#### Klawiatura 'numeric' do wprowadzania danych numerycznych
![TextInputsScreen3](https://i.imgur.com/LZaYLuw.png)

#### Przykład obsługi zdarzenia w tym przykładzie 'onEndEditing'
![TextInputsScreen4](https://i.imgur.com/PNcGOb8.png)


## SelectsScreen.js

Ekran przedstawia wyorzystanie Pickera do stworzenia własnego komponentu Select który za pomocą *map()* z wprowadzonego *json'a* jako parametr *items* tworzy *Picker.Item'y*.
Lista *options* jest zdeklarowana na sztywno aby pokazać ze jako *label* obsługuję wartoś *title* oraz *name*, reszta wartości jest ładowana ze strony [{JSON} Placeholder](https://jsonplaceholder.typicode.com/) za pomocą asynchronicznej metody *componentDidMount* z wykorzystaniem *fetch()*

```js
import React, {Component, useState } from 'react';
import { ScreenStyle } from '../Styles';
import {Picker} from '@react-native-picker/picker';
import { View, Text,ScrollView } from "react-native";

// Przygotowany komponent aby tworzył Item'y z przekazanego json'a
class Select extends Component {
    state = {selectedValue: 'Wybierz'}
    setSelectedValue = (selectedValue) => {
        if (selectedValue){
            this.setState({ selectedValue: selectedValue })
        }
    }
    render() {
        return (
            <View>
                <Picker selectedValue = {this.state.selectedValue} onValueChange = {this.setSelectedValue}>
                    {this.props.items ? this.props.items.map(item => <Picker.Item index = {item.id} label = {item.name ? item.name : item.title} value = {item.id}/>) : <Picker.Item index = {0} label = "Brak" value = {false}/>}
                </Picker>
            </View>
        )
    }
}

export default class SelectsScreen extends Component {
    constructor(props){
        super(props)
        const options = [
            { id: 'red', name: 'Czerwony' },
            { id: 'green', name: 'Zielony' },
            { id: 'blue', title: 'Niebieski' },
            { id: 'yellow', title: 'Zółty' },
            { id: 'orange', name: 'Pomarańczowy' },
            { id: 'pink', title: 'Różowy' }
        ]
        this.state = {options}
    }
    // Ładowanie danych asynchroniczie
    async componentDidMount() {
        const responsePosts = await fetch(`https://jsonplaceholder.typicode.com/posts`); 
        const jsonPosts = await responsePosts.json();
        this.setState({ posts: jsonPosts });

        const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments`);
        const jsonComments = await responseComments.json();
        this.setState({ comments: jsonComments });

        const responseAlbums = await fetch(`https://jsonplaceholder.typicode.com/albums`);
        const jsonAlbums = await responseAlbums.json();
        this.setState({ albums: jsonAlbums });

        const responsePhotos = await fetch(`https://jsonplaceholder.typicode.com/photos`);
        const jsonPhotos = await responsePhotos.json();
        this.setState({ photos: jsonPhotos });

        const responseToDos = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const jsonToDos = await responseToDos.json();
        this.setState({ todos: jsonToDos });

        const responseUsers = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const jsonUsers = await responseUsers.json();
        this.setState({ users: jsonUsers });
    }
    render(){ 
        return (
            <>
                <View style={ScreenStyle.titleBox}>
                    <Text style={ScreenStyle.titleText}>Komponent Select</Text>
                </View>
                <ScrollView style={ScreenStyle.contentBox}>
                    <>
                        <Text style={ScreenStyle.textBold}>Select z ustawionymi opcjami na sztywno</Text>
                        <Text>options</Text>
                        <Select style={ScreenStyle.textInput} items={this.state.options}/><Text/>
                    </>
                    <>
                        <Text style={ScreenStyle.textBold}>Select z pobieranymi opcjami asynchronicznie</Text>
                        <Text>posts</Text>
                        <Select style={ScreenStyle.textInput} items={this.state.posts}/><Text/>
                    </>
                    <>
                        <Text style={ScreenStyle.textBold}>Select z pobieranymi opcjami asynchronicznie</Text>
                        <Text>comments</Text>
                        <Select style={ScreenStyle.textInput} items={this.state.comments}/><Text/>
                    </>
                    <>
                        <Text style={ScreenStyle.textBold}>Select z pobieranymi opcjami asynchronicznie</Text>
                        <Text>albums</Text>
                        <Select style={ScreenStyle.textInput} items={this.state.albums}/><Text/>
                    </>
                    <>
                        <Text style={ScreenStyle.textBold}>Select z pobieranymi opcjami asynchronicznie</Text>
                        <Text>photos</Text>
                        <Select style={ScreenStyle.textInput} items={this.state.photos}/><Text/>
                    </>
                    <>
                        <Text style={ScreenStyle.textBold}>Select z pobieranymi opcjami asynchronicznie</Text>
                        <Text>todos</Text>
                        <Select style={ScreenStyle.textInput} items={this.state.todos}/><Text/>
                    </>
                    <>
                        <Text style={ScreenStyle.textBold}>Select z pobieranymi opcjami asynchronicznie</Text>
                        <Text>users</Text>
                        <Select style={ScreenStyle.textInput} items={this.state.users}/><Text/>
                    </>
                </ScrollView>
            </>
        )
    };
}
```

#### Widać że dane są jeszcze ładowane - widać 'Brak' elementów
![SelectsScreen1](https://i.imgur.com/sJhAol8.png)

#### Dane zostały już zaladowane
![SelectsScreen2](https://i.imgur.com/kmNtsHp.png)

#### Wyświetlenie listy **users**
![SelectsScreen3](https://i.imgur.com/kNpZiMV.png)

## SwitchScreen.js

Ekran przedstawia wyorzystanie komponentu Switch aby wywołać pokazanie się modala. Modal jest wyświetlany po przełączeniu switch na true. Sam modal wyświetla wewnątrz siebie wygenerowaną za każdym razem liczbę pseudo losową z zakresu 0 - 100. Kliknięcie w liczbę powoduje ukrycie modala. 
```js
import React, {Component,useState} from 'react';
import { ScrollView, Modal, Switch, Text, View } from 'react-native';
import { ScreenStyle } from '../Styles';

const CustomSwitch = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
        <>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
            <Modal
                animationType="slide"
                transparent={false}
                visible={isSwitchOn}
                onRequestClose={() => {
                    setModalVisible(!isSwitchOn);
                }}
            >
                <View style={ScreenStyle.centerVerticaly}>
                    <View style={ScreenStyle.cenetrHorizontaly}>
                        <Text onPress={onToggleSwitch} style={ScreenStyle.hugeText}>{Math.floor(Math.random()*100)}</Text>
                    </View>
                </View>
            </Modal> 
        </>
    );
};

export default class SwitchScreen extends Component {
    render(){ 
        return (
            <>
                <View style={ScreenStyle.titleBox}>
                    <Text style={ScreenStyle.titleText}>Komponenty Switch i Modal</Text>
                </View>
                <ScrollView style={ScreenStyle.contentBox}>
                    <CustomSwitch/><Text/>
                    <Text style={ScreenStyle.textBold}>Wyświetlanie liczby pseudolosowej w Modal'u</Text>
                    <Text>Po przełączeniu switch w górnym prawym rogu okna pojawi się Modal z losową liczbą z przedziału 0 - 100.</Text>
                    <Text>Kliknięcie w wyświetloną liczbę zamknie modal.</Text>
                </ScrollView>
            </>
        )
    };
}
```

#### Scena przed kliknięciem
![SwitchScreen1](https://i.imgur.com/LKelDxz.png)

#### Scena po kliknięciem
![SwitchScreen2](https://i.imgur.com/scM4DO5.png)

## DatePickerScreen.js

Tutaj wykorzystano komponent DatePicker z dodatkowego modułu. Przy przełączeniu na ekran wspomniany komponent pobiera aktualną date i ją ustawia jako swoją wartość. Jeżeli klikniemy w pole z pokazaną datą to wyświetli nam się "Kalendarz". Możemy tam wybrać dowolna datę a po zatwierdzeniu wartoś komponentu ulegnie zmianie na wskazaną datę a my dodatkowo zostaniemy poinformowani za pomocą alertu.

```js
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
```

#### Scena przed kliknięciem w komponent
![DatePickerScreen1](https://i.imgur.com/IwXFSMU.png)

#### Wspomniany "Klendarz"
![DatePickerScreen2](https://i.imgur.com/vFXl10r.png)

#### Alert z wybraną datą, w tle widać ze komponent również zmienił datę
![DatePickerScreen3](https://i.imgur.com/fNMhrqZ.png)

## ToastButton.js

Ta scena zawiera przycisk który obsługuje pojawienie się Modala i Toasta. Modal zamyka się po pokazanym czasie (generowanym pseudolosowo w zakresie 0 - 10000 milisekund) a Toast samoistnie po upływie czasu. Ukrycie Modala jest obsługiwane przez obiekt promise który czeka na wiadomość o wartości 'hide' która jest wysyłana po wskazanym czasie. Gdyby jej nie otrzymał albo otrzymał inną to Modal nie został by ukryty gdyz obiek nie był by "spełniony".

```js
import React, {Component, useEffect, useState} from 'react';
import { ScrollView,Button, Modal,ToastAndroid, Text, View } from 'react-native';
import { ScreenStyle } from '../Styles';

const Toast = ({ visible, message }) => {
    if (visible) {
      ToastAndroid.showWithGravityAndOffset(
        message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      return null;
    }
    return null;
  };


const ToastButton = () => {
    const [visibleToast, setVisibleToast] = useState(false);
    useEffect(() => setVisibleToast(false), [visibleToast]);
    const handleButtonPress = () => {
      setVisibleToast(true);
    };
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  
    // Obsługa czasu
    const [time, setTime] = useState(0);

    // Wywoywanie Promise
    var promise = null
    const createPromise = () => {
        var tempTime = Math.floor(Math.random()*10000)
        setTime(tempTime)
        promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('hide');
            }, tempTime);
        });
    }

    return (
        <View style={ScreenStyle.container}>
            <Toast visible={visibleToast} message="Przykładowy toast" />
            <Button title="WYŚWIETL TOAST I MODAL" onPress={() => {
                onToggleSwitch()
                handleButtonPress()
                createPromise()
                // Oczekiwanie na timeout z promise
                // Jeżeli otrzyma 'hide' to ukrywa modal
                promise.then((value) => {
                    if(value == 'hide'){
                        setIsSwitchOn(false)
                    }
                });
            }}/>
            <Modal
                animationType="slide"
                transparent={false}
                visible={isSwitchOn}
                onRequestClose={() => {
                    setModalVisible(!isSwitchOn);
                }}
            >
                <View style={[ScreenStyle.centerVerticaly,{backgroundColor:'#bbb'}]}>
                    <View style={ScreenStyle.cenetrHorizontaly}>
                        <Text onPress={onToggleSwitch} style={ScreenStyle.bigText}>{time} ms</Text>
                    </View>
                </View>
            </Modal> 
        </View>
    );
};
export default class ToastScreen extends Component {
    render() {
      return (
        <>
            <View style={ScreenStyle.titleBox}>
                <Text style={ScreenStyle.titleText}>Komponent TextInput</Text>
            </View>
            <ScrollView style={ScreenStyle.contentBox}>
                <ToastButton/><Text/>
                <Text style={ScreenStyle.textBold}>Po naciśnięciu przycisku powyżej pojawi się ToastAndroid oraz Modal który zostanie ukryty po czasie.</Text>
                <Text>Modal jest skopiowany z przykładu z Switch'em jednak z ciemniejszym tłem aby było widać lepiej Toast.</Text>
                <Text>Na modalu wyświetla się wygenerowany czas w milisekundach od 0 - 10000. Ten czas oznacza za ile modal zostanie zamknięty.</Text>
                <Text>Za zamknięcie Modala odpowiada oczekiwanie na Promise. Jeżeli otrzyma wartość 'hide' to go ukryje.</Text>
            </ScrollView>
        </>
      );
    }
}

```

#### Scena przed kliknięciem w przycisk
![ToastButton1](https://i.imgur.com/E9fNZQR.png)

#### Widok na Modal z czasem i na dole ekranu Toast
![ToastButton2](https://i.imgur.com/Ad0wQQw.png)
