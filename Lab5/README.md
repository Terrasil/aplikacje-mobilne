# Aplikacje mobilne
### Laboratorium 5

### Autor: Patryk Morawski, 185ic_a1

## Narzędzia

Jako podstawę aplikacji wykorzystałem kod z [Lab4](https://github.com/Terrasil/aplikacje-mobilne/tree/main/Lab4).

#### Dodatkowe poduły

 - react-native-scroll-indicator
 
 ``` npm install react-native-scroll-indicator ```
 
 - react-native-webview
 
 ``` npm install react-native-webview ```
 
#### Struktura plików:
```
  ./src
   ├── /screens
   │   ├── FirstScrollViewScreen.js
   │   ├── SecondScrollViewScreen.js
   │   ├── SwipeableScreen.js
   │   └── TouchableScreen.js
   ├── Main.js
   └── Styles.js
```

## Działanie

Aplikacja ma przygotowane 4 ekrany.

- **Pierwszy ScrollView** - zawiera 'domyslny' ScrollView od *'react-native'*.
- **Drugi ScrollView** - zawiera ScrollViewIndicator od *'react-native-scroll-indicator'* wykorzystany aby w prostszy sposób zmienic wygląd scrollbara gdyż ten domyślnie jest mało widoczny.
- **Komponenty Touchable** - ukazuje wykorzystanie komponentów TouchableOpacity i TouchableHighlight aby na zdarzeniach onPress incrementować przydzielone im liczniki dodatkowo wykorzystanie InputTextu aby uruchamiać Modal z componentem WebView.
- **Komponent Swipeable** - to wykorzystanie Swipeable do stworzenia interaktywnej listy s pykrzystaniem asynchronicznego ładowania z poptrzednich laboratorii (Activityindicator, oraz pobieranie danych za pomocą fetch()).

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
import FirstScrollViewScreen from './screens/FirstScrollViewScreen'
import SecondScrollViewScreen from './screens/SecondScrollViewScreen'
import TouchableScreen from './screens/TouchableScreen'
import SwipeableScreen from './screens/SwipeableScreen'

const Drawer = createDrawerNavigator();

export default class Main extends Component {
    render(){ 
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Pierwszy ScrollView">
                    <Drawer.Screen name="Pierwszy ScrollView" component={FirstScrollViewScreen} />
                    <Drawer.Screen name="Drugi ScrollView" component={SecondScrollViewScreen} />
                    <Drawer.Screen name="Komponenty Touchable" component={TouchableScreen} />
                    <Drawer.Screen name="Komponent Swipeable" component={SwipeableScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    };
}
```

![Main](https://i.imgur.com/OvSBIiL.png)

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

    
    scrollView:{
        alignContent:'center',
        flexDirection: 'column',
        alignItems: 'baseline',
    },
    scrollViewIndicator:{
        alignContent:'space-between',
        flexDirection: 'column',
        alignItems: 'center',
    },
    scrollIndicatorStyle:{
        backgroundColor:'#048',
    },
    scrollIndicatorContainerStyle:{
        width:200,
    },
    scrollViewStyle:{
    },
    viewBox: {
        width: 128,
        height: 128,
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
    textInput:{
        backgroundColor: '#ddd',
        marginVertical:'2%',
        padding:'3%',
        width:'75%',
    },

    swipeable:{
        flex:1,
        width:'100%',
        flexDirection: 'column',
        backgroundColor:'white',
        marginBottom:'1%',
    },
    swipeableText:{
        flex:1,
        width:'100%',
        flexDirection: 'column',
        backgroundColor:'white',
        padding:'10%',
    },
    swipeableTextCompleted:{
        flex:1,
        width:'100%',
        flexDirection: 'column',
        backgroundColor:'lime',
        padding:'10%',
    },
    swipeableTextUnCompleted:{
        flex:1,
        width:'100%',
        flexDirection: 'column',
        backgroundColor:'orangered',
        padding:'10%',
    },
    toDoBox:{
        flex:1,
        width:'100%',
        flexDirection: 'column',
        backgroundColor:'white',
    },
    loading:{
        flex:1,
        width:'100%',
        height:'100%',
        flexDirection: 'column',
        backgroundColor:'white',
        alignItems: 'center',
        paddingVertical:'75%',
    },
})

  
export const AppStyle = styles.app
export const ScreenStyle = styles.screen
```

# Komponenty

## FirstScrollViewScreen.js

Pokazuje korzystanie z FlexBoxu do pozycjonowania kontentu. W ScrollView umieszczono dziesięć View w różnych kolorach o wymiarach 128x128 px, aby widoczny był scrollbar (ten jednak domyslnie nie rzuca się w oczy).

```js
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
```

![FirstScrollViewScreen](https://i.imgur.com/d225xap.png)

## SecondScrollViewScreen.js

Wykorzystano tutaj moduł z ScrollVievIndicator'em aby ostylować scrollbar. Dodatkowo inaczej wykorzystano flexbox aby wycentrować identyczna zawartoś jak na poprzednim ekranie.

```js
import React, {Component, useEffect } from 'react';
import { ScrollView, Text, View,LogBox  } from 'react-native';
import ScrollViewIndicator from 'react-native-scroll-indicator';
import { ScreenStyle } from '../Styles';


export default class SecondScrollViewScreen extends Component {
    componentDidMount() {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }
    render(){ 
        return (
            <>
                <View style={ScreenStyle.titleBox}>
                    <Text style={ScreenStyle.titleText}>Drugi ScrollView</Text>
                </View>
                <ScrollViewIndicator style={ScreenStyle.scrollViewIndicator} scrollViewStyle={ScreenStyle.scrollViewStyle} scrollIndicatorContainerStyle={ScreenStyle.scrollIndicatorContainerStyle} scrollIndicatorStyle={ScreenStyle.scrollIndicatorStyle}>
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
                </ScrollViewIndicator>
            </>
        )
    };
}
```

![SecondScrollViewScreen](https://i.imgur.com/9qvPwux.png)

## TouchableScreen.js

Tutaj mamy przykłady wykorzystania dwuch na pozór podobnych jak nie indentycznych komponentów. Bez wnikania w props'y wspomnianych komponentów możemy zauważyć różnicę w interakcji. Oba komponenty mają przydzielone w stats'ach własne liczniki które incrementują, są one na bierząco wyświetlane z adekwatnymi etykietami. Ciekawsze Jest wykorzystanie TextInput'u. Pozwala on na wprowadznie frazy która po zakończeniu edycji jest zapisywana. Po wcisnięciu przycisku [Wyszukaj w Google] zostaje uruchomiony (uwidoczniony) Modal który finalnie zawiera w sobie WebView'era. Pobiera on wartoś uprzednio zapisana z TextInputu i dołacza ją do linku 'https://www.google.com/search?q=' przez co otrzymujemy pełne zapytanie z wyszukiwarki Google. Następnie jest ten adres wykorzystany do wyświetlenia w WebView.

```js
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
```

#### Widok ekranu
![TouchableScreen1](https://i.imgur.com/2uPvSul.png)

#### Wciśnięcie TouchableOpacity
![TouchableScreen2](https://i.imgur.com/HyjEvF1.png)

#### Wciśnięcie TouchableHighlight
![TouchableScreen3](https://i.imgur.com/d5C6Tb0.png)

#### Wprowadzamy wyszukiwaną frazę, tutaj 'amw'
![TouchableScreen4](https://i.imgur.com/Ae1149q.png)

#### Modal z WebView z ustawioną szukaną frazą z TextInput
![TouchableScreen5](https://i.imgur.com/wU4sbGP.png)

#### Po wciśnięciu "WRÓĆ" Modal jest ukrywany
![TouchableScreen6](https://i.imgur.com/9jD3kfq.png)


## SwipeableScreen.js

Z komponentow Swipeable utworzyłem listę. Jest ona ładowana asynchronicznie za pomocą *async componentDidMount()* i w niej zawartą funkcją fetch() pobierającą dane o "To Do" liście z tego adresu [Zobacz](https://jsonplaceholder.typicode.com/todos). Ładowanie troche zajmuje dlatego wykorzystałem komponent Suspense oraz ActivityIndicator poznane w [Lab3](https://github.com/Terrasil/aplikacje-mobilne/tree/main/Lab3). Sprawia to że oczekiwanie jest mniej irytujące.
Elementy SwipeableItem w SwipeableList pozwalają za sprawdzenie czy dane zadanie zostalo ukończone. Przesunięcie elemenu w prawo powoduje ukazanie wiadomości o odpowiedniej treści i kolorze (wiadomość "Już wykonano!" na limonkowym tle dla completed:true / wiadomosć "Jeszcze nie wykonano!" na ciemno pomarańczowym tle dla completed:false)

```js
import React, {Component} from 'react';
import { ActivityIndicator, Button, ScrollView, Text, View } from 'react-native';
import { ScreenStyle } from '../Styles';
import { ReactDOM } from 'react-dom';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';

class Loading extends Component{
    render(){
        return(
            <View style={ScreenStyle.loading}>
                <View>
                    <ActivityIndicator size = 'large'color = '#0892d0'/>
                    <Text>{this.props.children}</Text>
                </View>
            </View>
        )
    }
}
class SwipeableItem extends Component{
    action = () => {
        return (
            <>
                <View style={ScreenStyle.toDoBox}>
                    <Animated.Text style={this.props.completed ? ScreenStyle.swipeableTextCompleted : ScreenStyle.swipeableTextUnCompleted}>
                        {this.props.completed ? `Już wykonano!`:`Jeszcze nie wykonano!`}
                    </Animated.Text>
                </View>
            </>
        )
    }
    render(){
            return(
            <Swipeable index={this.props.index} containerStyle={ScreenStyle.swipeable} renderLeftActions={this.action}>
                <View index={this.props.index} style={ScreenStyle.toDoBox}>
                    <Text index={this.props.index} style={ScreenStyle.swipeableText}>
                        {this.props.title}
                    </Text>
                </View>
            </Swipeable>
        );
    }
}
class SwipeableList extends Component{
    render(){
        return(
            <>
                {this.props.items ? this.props.items.map(item => <SwipeableItem completed={item.completed} key = {item.id} title = {item.title}/>) : <Loading>Ładowanie...</Loading>}
            </> 
        )
    }
}
export default class SwipeableScreen extends Component {
    state = {
        todos: ''
    }
    async componentDidMount() {
        const responseToDos = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const jsonToDos = await responseToDos.json();
        this.setState({ todos: jsonToDos });
    }
    render(){ 
        return (
            <>
                <View style={ScreenStyle.titleBox}>
                    <Text style={ScreenStyle.titleText}>Komponent Swipeable</Text>
                </View>
                <ScrollView contentContainerStyle={[ScreenStyle.scrollView,{backgroundColor:'#ddd'}]}>
                    <SwipeableList items={this.state.todos}/>
                </ScrollView>
            </>
        )
    };
}
```

#### Widok ekranu gdzie trwa ładowanie
![SwipeableScreen1](https://i.imgur.com/CCj8NHr.png)

#### Załadowana lista
![SwipeableScreen2](https://i.imgur.com/Uqjqb6y.png)

#### Sprawdzanie stanu zadania
![SwipeableScreen3](https://i.imgur.com/0hG8NR6.png)
