# Aplikacje mobilne
### Laboratorium 6

### Autor: Patryk Morawski, 185ic_a1

## Narzędzia

Jako podstawę aplikacji wykorzystałem kod z [Lab4](https://github.com/Terrasil/aplikacje-mobilne/tree/main/Lab4).

#### Dodatkowe moduły

 - @react-native-async-storage/async-storage
 
 ``` npm install @react-native-async-storage/async-storage ```
 
 - @react-native-community/netinfo
 
 ``` npm install @react-native-community/netinfo ```
 
 - @react-native-community/slider
 
 ``` npm install @react-native-community/slider ```
 
 - @expo/vector-icons
 
 ``` npm install @expo/vector-icons ```
 
#### Struktura plików:
```
  ./assets
   ├── jezioro.jpg
   └── [...]
  ./src
   ├── /screens
   │   ├── AsyncStorageScreen.js
   │   ├── ConnectionScreen.js
   │   ├── ImagesScreen.js
   │   ├── LazyLoadingAndIcons.js
   │   ├── ResizeScreen.js
   │   └── SyncDataScreen.js
   ├── Main.js
   └── Styles.js
```

## Działanie

Aplikacja ma przygotowane 6 ekranów.

- **Obrazy** - Ma zagnieżdżone dwa komponenty Image z dwoma sposobami wskazywania źródła. Górny pobiera obraz z folderu */assets* przechowywanego lokalnie, drugi pobiera obraz z *uri* czyli adresu zdalnego.
- **Zmiana rozmiaru** - Identycznie jak poprzedni ekran ma zagniezdzone komonenty Image z tym ze w odwrotnej kolejnosci. Pod obrazami umieszczone są Slider'y którymi mozna kolejno pomniejszać i powiekrzać obraz powyzej.
- **Leniwe ładowanie i ikony** - Tutaj widzimy ładowanie ogromnej tapety z uri **[8K]**. Pod tapetą znajdują się przykładowe ikony SVG.
- **Stan połączenia** - Za pomocą NetInfo pobierane są informacje o połączenbiu a następnie wyświetlane w czytelniejszy sposób.
- **Zapis danych** - Mamy mozliwość wprowadzenia danych do zasobów lokalnych (AscynSorage) podając klucz i wartość a następnie odczytac podając klucz interesującej nas wartości.
- **Synchronizacja danych** - Praktyczne wykorzystanie elementów z wcześniejszych ekranów. Symulowane jest połączenie z zdalną bazą zasobów kture są synchronizowane z lokalnymi.

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

Zawiera **Drawer** jako komponent odpowiedzialny za wybór ekranu.

```js
import React, {Component} from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ImagesScreen from './screens/ImagesScreen'
import ResizeScreen from './screens/ResizeScreen'
import LazyLoadingAndIcons from './screens/LazyLoadingAndIcons'
import ConnectionScreen from './screens/ConnectionScreen'
import AsyncStorageScreen from './screens/AsyncStorageScreen'
import SyncDataScreen from './screens/SyncDataScreen'

const Drawer = createDrawerNavigator();

export default class Main extends Component {
    render(){ 
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Obrazy">
                    <Drawer.Screen name="Obrazy" component={ImagesScreen} />
                    <Drawer.Screen name="Zmiana rozmiaru" component={ResizeScreen} />
                    <Drawer.Screen name="Leniwe ładowanie i ikony" component={LazyLoadingAndIcons} />
                    <Drawer.Screen name="Stan połączenia" component={ConnectionScreen} />
                    <Drawer.Screen name="Zapis danych" component={AsyncStorageScreen} />
                    <Drawer.Screen name="Synchronizacja danych" component={SyncDataScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    };
}
```

![Main](https://i.imgur.com/M0d0gPT.png)

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

    textInput:{
        backgroundColor: '#ddd',
        marginVertical:'2%',
        padding:'3%',
        width:'75%',
    },
    section:{
        flex:1,
        alignSelf:'stretch',
        alignContent:'center',
        alignItems: 'center',
    },
    button:{
        backgroundColor:"#08f",
        paddingHorizontal:'10%',
        paddingVertical:'5%',
        margin:'5%',
    },
    infoTextTitle:{
        fontSize:24,
        fontWeight:'bold',
    },
    infoText:{
        fontSize:24,
    },
    image:{
        width: 435, 
        height: 250,
    },
    whiteText:{
        color:'#fff',
        fontSize:16,
        
    },
})

  
export const AppStyle = styles.app
export const ScreenStyle = styles.screen
```

# Komponenty

## ImagesScreen.js

Oba obrazy są identycznej rozdzielczosci jednak mozna zauwazyc nieznaczna ale jednak róznicę w czasie ładowania. Obraz z wykorzystaniem URI jest nieznacznie wolniejszy w czasie ładowania. Emulator w Android Studio nie pozwolił na sztuczne zmniejszenie przesyłu aby róznica była znaczniej widoczna. 

```js
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
```

#### Załadowane obrazy
![ImagesScreen](https://i.imgur.com/zgSiSyS.png)

## ResizeScreen.js

Ekran wykorzystuje Slidery i ich metody *onValueChange* aby zmienic rozmiar komponentów Image. Ten z zródłem ładowanym z URI jest pomniejszany a ten z zródłem ładowanym z */assets* powiekszany.

```js
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
```

#### Widok po wyświetleniu ekranu
![ResizeScreen1](https://i.imgur.com/my0K028.png)
#### Przesunięcie Sliderów i powiązana zmiana rozmiaru obrazów
![ResizeScreen2](https://i.imgur.com/32qS4iG.png)

## LazyLoadingAndIcons.js

Ekran ładuje olbrzymi obraz (tapetę). Ta tapeta ma rozmiar 7680x4320px. Rozmiar był podyktowany tym że już wcześniej wspomniany Emultor AVD nie ma dostepnej możliwości zawężenia transferu aby wolniej łądować obrazy. Pomimo ogromnego rozmiaru tapety nie jest się wstanie zauwazyć placeholdera w postaci obrazu wbudowanego w **expo** w folderze /assets. Paramerty loadingIndicatorSource lub defaultSource (tylko jedno jednocześnie) pozwalają na wskazanie komponentu lub assetu który jest wyświetlany zanim obraz zostanie zaladowany. Ikony rownież podlegają leniwemu ładowaniu co jest bardziej widoczne.

```js
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
```

#### Widać że obraz szybko się załadował ale ikony potrzebują jeszcze troche czasu
![LazyLoadingAndIcons1](https://i.imgur.com/h4hfAbl.png)

#### Wpełni załadowany ekran
![LazyLoadingAndIcons2](https://i.imgur.com/bPSN0KX.png)

## ConnectionScreen.js

Zapomocą NetInfo pobieramy informacje o połączeniu w formacie JSON. Są one pobierane odrazu po wczytaniu komponentu z ekranem jednak dodałem przycisk do aktualizowania informacji. Niestety ze względu na praktyczny brak możliwości edytowania emulatora pod względem połączenia internetowego nie byłem wstanie tego sprawdzić.

```js
import React, { Component } from 'react';
import { ScrollView, Text, View, Button } from 'react-native'
import NetInfo from "@react-native-community/netinfo";
import { ScreenStyle } from '../Styles';

export default class ConnectionScreen extends Component {
    state = {};
    componentDidMount() {
        this.fetchState();
    }
    fetchState = async () => {
        const state = await NetInfo.fetch();
        var tempState = JSON.stringify(state)
        this.setState(JSON.parse(tempState))
    };

    render(){ 
        var details = this.state.details ? JSON.parse(JSON.stringify(this.state.details,null)) : ''
        return (
            <>
                <View style={ScreenStyle.titleBox}>
                    <Text style={ScreenStyle.titleText}>Stan połączenia</Text>
                </View>
                <ScrollView contentContainerStyle={[ScreenStyle.scrollView,{flex:1,flexDirection: 'column'}]}>
                    <View style={ScreenStyle.contentBox}>  
                        <Text style={ScreenStyle.infoTextTitle}>Informacje o połączeniu</Text>
                        <Text style={ScreenStyle.infoText}>IP: {details.ipAddress}</Text>
                        <Text style={ScreenStyle.infoText}>Jakość: {details.strength}%</Text>
                        <Text style={ScreenStyle.infoText}>Częstotliwość: {details.frequency}MHz</Text>
                        <Text style={ScreenStyle.infoText}>Internet osiągalny: {this.state.isInternetReachable?`tak`:`nie`}</Text>
                        <Text style={ScreenStyle.infoText}>Typ: {this.state.type}</Text>
                        <Text style={ScreenStyle.infoText}>Połączony: {this.state.isConnected?`tak`:`nie`}</Text>
                        <Text style={ScreenStyle.infoText}>Wifi: {this.state.isWifiEnabled?`tak`:`nie`}</Text>
                        <Text/><Button
                            title='Odświerz dane'
                            style={ScreenStyle.button}
                            onPress={() => this.fetchState}
                        >
                        </Button>
                    </View>
                </ScrollView>
            </>
        )
    };
}
```

#### Informacje o połączeniu (najistotniejsze ale nie wszystkie)
![ConnectionScreen1](https://i.imgur.com/Us2wp24.png)

## AsyncStorageScreen.js

Ekran zawiera dwa "formularze". Pierwszy pozwala nam wprowadzić do zasobów lokalnych wprowadzoną wartoś o podanym kluczu a drugi odczytać wartość o danyk kluczu. Toast powiadamia nas o zapisanych elementach a alert pokazuje wartoś odczytaną.

```js
import React, {Component, useEffect, useState } from 'react';
import { Button, ScrollView, Text, ToastAndroid,TextInput, View, } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
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

export default class AsyncStorageScreen extends Component {
    constructor(){
        super()
    }
    state = {
        showToast:false,
        saveKey:'',
        saveValue:'',
        readKey:''
    }
    storeData = async () => {
        var key = this.state.saveKey
        var value = this.state.saveValue
        try {
            await AsyncStorage.setItem(key,value);
            this.setState({showToast:true})
        } catch (error) {
            console.error(error)
        }
    };
    retrieveData = async () => {
        var key = this.state.readKey
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                alert('Klucz:'+key+' Wartość:'+value);
            }else{
                alert('Nie znaleziono elementu');
            }
        } catch (error) {
            console.error(error)
        }
    };
    render(){ 
        return (
            <>
                <View style={ScreenStyle.titleBox}>
                    <Text style={ScreenStyle.titleText}>Zapis danych</Text>
                </View>
                <ScrollView contentContainerStyle={[ScreenStyle.scrollView,{flex:1,flexDirection: 'column'}]}>
                    <View style={ScreenStyle.section}>
                        <View style={ScreenStyle.cenetrHorizontaly}>
                            <Text style={ScreenStyle.textBold}>Podaj wartość do zapisania</Text>
                            <View style={{flexDirection: 'row'}}>
                                <TextInput onEndEditing={event =>{this.setState({saveKey: event.nativeEvent.text})}} placeholder="Podaj klucz" style={ScreenStyle.textInput}/>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <TextInput onEndEditing={event =>{this.setState({saveValue: event.nativeEvent.text})}} placeholder="Wpisz wartość" style={ScreenStyle.textInput}/>
                            </View>
                            <Button
                                title='Dodaj wartość'
                                style={ScreenStyle.button}
                                onPress={this.storeData}
                            >
                            </Button>
                        </View>
                    </View>
                    <View style={ScreenStyle.section}>
                        <View style={ScreenStyle.cenetrHorizontaly}>
                            <Text style={ScreenStyle.textBold}>Podaj wartość do odczytania</Text>
                            <View style={{flexDirection: 'row'}}>
                                <TextInput onEndEditing={event =>{this.setState({readKey: event.nativeEvent.text})}} placeholder="Podaj klucz" style={ScreenStyle.textInput}/>
                            </View>
                            <Button
                                title='Wyświetl'
                                style={ScreenStyle.button}
                                onPress={this.retrieveData}
                            >
                            </Button>
                            <Toast visible={this.state.showToast} message={"Zapisano "+this.state.saveKey+" jako "+this.state.saveValue} />
                        </View>
                    </View>
                </ScrollView>
            </>
        )
    };
}
```

#### Ekran z wspomnianymi "formularzami"
![AsyncStorageScreen1](https://i.imgur.com/EAZZQMl.png)
#### Zapis danych
![AsyncStorageScreen2](https://i.imgur.com/m0gNuM1.png)
#### Odczyt danych
![AsyncStorageScreen3](https://i.imgur.com/P2vDr6Q.png)


## SyncDataScreen.js

Wykorzystałem elementy poznane przy realizacji poprzednich ekranów aby wykorzystać je w bardziej praktyczny sposób. Informacje z elementu Slider i TextInput (Po wciśnięciu Button's) są zapisywane w zasobach lokalnych i jeżeli jest dostępne połączenie internetowe, są one wysyłane na zdalne magazynowanie zasobów. Nieststy przez wspominane niejednokrotnie wcześniej problemy z emulatorem tymrazem zasymulowałem połączenie. Switch pozwala "wyłączyć lub właczyć połączenie interentowe" (Toast informuje nas o zmianie stanu internetu). W stats jest przygotowany "kontener" imitujązy zewnetrzny magazyn. Metoda chechData aktualizuje zasoby co 1000ms [setInterval] o ile wykryje połączenie. Dodatkowo umiesciłem niebieski panel który daje nam wgląd w aktualny stan magazynów.  

```js
import React, {Component} from 'react';
import { Button, ScrollView, Text, ToastAndroid,TextInput, View, Switch } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Slider from '@react-native-community/slider';
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

export default class SyncDataScreen extends Component {
    /// dane lokaln przetrzymywane w AsyncStorage
    // zapisywanie
    storeData = async () => {
        var key = "localValue"
        var value = this.state.localValueBuffer
        try {
            await AsyncStorage.setItem(key,value).then(() => {
                alert(test)
            })
        } catch (error) {
            console.error(error)
        }
    };
    // odczytyanie
    retrieveData = async () => {
        var key = "localValue"
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                this.setState({showLocalValue:value})
            }else{
                this.setState({showLocalValue:'n/a'})
            }
        } catch (error) {
            this.setState({showLocalValue:error})
        }
    };
    // pobieranie danych z slidera
    sliderValue = async (value) => {
        var key = "localSlider"
        try {
            await AsyncStorage.setItem(key,value.toString());
        } catch (error) {
            console.error(error)
        }
        try {
            const tempValue = await AsyncStorage.getItem(key);
            if (tempValue !== null) {
                this.setState({showLocalSlider:tempValue})
            }else{
                this.setState({showLocalSlider:'n/a'})
            }
        } catch (error) {
            this.setState({showLocalSlider:error})
        }
    }
    state = {
        // dane do obsługi interakci z użytkownikiem
        internetConnection: true,
        showInfoModal:false,
        showInfoToast:false,
        localValueBuffer:'',
        showLocalValue:'',
        showLocalSlider:'',
        // danne dostepne przez internet
        remoteStorage: {
            remoteValue:'',
            remoteSlider:0,
        },
    }
    // funkcja sprawdzająca integralnośc danych lokalnych i zdalnych
    checkData = () =>{
        if(this.state.internetConnection){
            // połączenie z internetem
            // aktualizacja danych
            this.setState({remoteStorage:{remoteValue:this.state.showLocalValue,remoteSlider:this.state.showLocalSlider}})
        }else{
            // brak połączenia z internetem
            // nie aktualizuje danych
        }
    }
    componentDidMount(){
        //sprawdzanie stanu połączenia co sekundę
        setInterval(this.checkData, 1000)
    }
    render(){ 
        return (
            <>
                <View style={ScreenStyle.titleBox}>
                    <Text style={ScreenStyle.titleText}>Synchronizacja danych</Text>
                </View>
                <ScrollView contentContainerStyle={[ScreenStyle.scrollView,{flex:1,flexDirection: 'column'}]}>
                    <Text/>
                    <View>
                        <Text style={[ScreenStyle.infoText,{alignSelf:'center'}]}>Internet: {this.state.internetConnection?`ON `:`OFF`}</Text>
                    </View>
                    <View>
                        <Switch value={this.state.internetConnection} style={{alignSelf:'center'}} onValueChange={val =>{this.setState({showInfoToast:true, internetConnection: val})}}/>
                    </View>
                    <View style={ScreenStyle.section}>
                        <View style={[ScreenStyle.cenetrHorizontaly,{alignItems:'flex-start'}]}>
                            <Text style={ScreenStyle.textBold}>Zapisana wartość: {this.state.showLocalSlider}</Text>
                            <Slider
                                style={{width: 300, height: 40}}
                                minimumValue={0}
                                maximumValue={100}
                                step={1}
                                thumbTintColor='#08f'
                                minimumTrackTintColor="#08f"
                                maximumTrackTintColor="#000000"
                                onValueChange={this.sliderValue}
                            />
                        </View>
                    </View>
                    <View style={ScreenStyle.section}>
                        <View style={ScreenStyle.cenetrHorizontaly}>
                            <Text style={ScreenStyle.textBold}>Zapisana wartość: {this.state.showLocalValue}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <TextInput onEndEditing={event =>{this.setState({localValueBuffer: event.nativeEvent.text})}} placeholder="Podaj wartość" style={ScreenStyle.textInput}/>
                            </View>
                            <Button
                                title='Zapisz'
                                style={ScreenStyle.button}
                                onPress={
                                    this.storeData,
                                    this.retrieveData
                                }
                            >
                            </Button>
                        </View>
                    </View>
                    <View style={[ScreenStyle.section,{backgroundColor:'#048'}]}>
                        <Text/><Text style={ScreenStyle.titleText}>Podgląd w dane</Text>
                        <View style={[ScreenStyle.centerVerticaly,{justifyContent:'space-around'}]}>
                            <View style={[ScreenStyle.cenetrHorizontaly,{justifyContent:'space-around'}]}>
                                <Text style={[ScreenStyle.whiteText,ScreenStyle.textBold]}>STORAGE</Text>
                                <Text style={[ScreenStyle.whiteText,ScreenStyle.textBold]}>slider</Text>
                                <Text style={[ScreenStyle.whiteText,ScreenStyle.textBold]}>input</Text>
                            </View>
                            <View style={ScreenStyle.cenetrHorizontaly}>
                                <Text style={[ScreenStyle.whiteText,ScreenStyle.textBold]}>LOCAL</Text>
                                <Text style={ScreenStyle.whiteText}>{this.state.showLocalSlider}</Text>
                                <Text style={ScreenStyle.whiteText}>{this.state.showLocalValue}</Text>
                            </View>
                            <View style={ScreenStyle.cenetrHorizontaly}>
                                <Text style={[ScreenStyle.whiteText,ScreenStyle.textBold]}>REMOTE</Text>
                                <Text style={ScreenStyle.whiteText}>{this.state.remoteStorage.remoteSlider}</Text>
                                <Text style={ScreenStyle.whiteText}>{this.state.remoteStorage.remoteValue}</Text>
                            </View>
                        </View>
                    </View>
                    <Toast visible={this.state.showInfoToast} message={this.state.internetConnection?`Połączono z internetem`:`Brak połączenia z internetem`} />
                </ScrollView>
            </>
        )
    };
}
```

#### Ekran z stanem początkowym (internet włączony / brak danych)
![SyncDataScreen1](https://i.imgur.com/ajfhiwJ.png)
#### Wyłączamy internet- adekwatne poinformowanie w Toast
![SyncDataScreen2](https://i.imgur.com/E8nfAQl.png)
#### Wprowadzamy dane przy  wyłączonym internecie (zmiana jedynie w zasobach lokalnych)
![SyncDataScreen3](https://i.imgur.com/aerLz07.png)
#### Włączamy internet - również informacja w Toast - dane są po chwili wysyłane na zdalny magazyn
![SyncDataScreen4](https://i.imgur.com/IPvZIhE.png)
#### Szybka zmiana wartości przesuniącia Slidera (widac opóżnienie bo metoda jest uruchamiana co sekunde [~interpolacja])
![SyncDataScreen5](https://i.imgur.com/Fy20rVF.png)
#### Dane w zdalnym magazynie zaktualizowane
![SyncDataScreen6](https://i.imgur.com/6WpNbCj.png)
