# Aplikacje mobilne
aplikacje-mobilne

### Autor: Patryk Morawski, 185ic_a1

## Narzędzia

Aplikacja korzysta z **Drawer** *@react-navigation/drawer* jako menu.

Scena główna to komponent ***Main*** a style znajdują się w ***Styles.js***

Dodatkowo przygotowane 5 ***"Scen"*** w folderze ***./src/screens*** + komponent do załadowania

Struktura plików:
```
  ./src
    ├── /screens
    │     ├── ComponentToLoad.js
    │     ├── FirstStepProgress.js
    │     ├── LazyLoading.js
    │     ├── SecondStepProgress.js
    │     ├── SortAndFilter.js
    │     └── ThirdStepProgress.js
    ├── Main.js
    └── Styles.js
```
## Działanie

Zakładka *"Sortowanie i filtrowanie"* zawiera komponent z randomowym generowaniem listy liczb i ich wyświetlenie za pomocą ***.map()***. Dodatkowo są um ieszczone dwa przyciski ***"Sortuj"*** oraz ***"Randomizuj"***. Pierwszy uruchamia metode sortującą te elementy a drugi ponownie generuje zrandomizowaną tablice.

Zakładka *"Leniwe ładowanie"* zawiera komponent który demonstruje działanie ***React.lazy()***. Ładowany jest komponent który generuje i wyświetla *string* o długości 100.000 znaków (aby troche trwało) który składa się z randomowych znaków podanych jako ***"paleta"***.

Zakładki *"Pierwszy przykład ładowania"*, *"Drugi przykład ładowania"* oraz *"Trzeci przykład ładowania"* zawiera komponent ***'ActivityIndicator'*** w różnych wariaciach.

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
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SortAndFilter from './screens/SortAndFilter'
import LazyLoading from './screens/LazyLoading'
import FirstStepProgress from "./screens/FirstStepProgress";
import SecondStepProgress from "./screens/SecondStepProgress";
import ThirdStepProgress from "./screens/ThirdStepProgress";

const Drawer = createDrawerNavigator();

export default class Main extends Component {
    render(){ 
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Sortowanie i filtrowanie">
                    <Drawer.Screen name="Sortowanie i filtrowanie" component={SortAndFilter} />
                    <Drawer.Screen name="Leniwe ładowanie" component={LazyLoading} />
                    <Drawer.Screen name="Pierwszy przykład ładowania" component={FirstStepProgress} />
                    <Drawer.Screen name="Drugi przykład ładowania" component={SecondStepProgress} />
                    <Drawer.Screen name="Trzeci przykład ładowania" component={ThirdStepProgress} />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    };
}
```

![Main](https://i.imgur.com/KXFMWgv.png)

## Styles.js

Zawiera style do uzywanych komponentów:
 - ***AppStyle*** czyli ***styles.app*** zawiera style do ***App.js***
 - ***MainStyle*** czyli ***styles.main*** zawiera style do ***Main.js***
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
styles.main = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#222',
        marginTop:'12%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
})

styles.screen = StyleSheet.create({
    view:{
        flex:1,
        padding:'5%',
        flexDirection:'column',
    },
    center:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    content:{
        flex:1,
        padding:'5%',
        flexDirection:'column',
        backgroundColor: '#ddd',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
    },
    item:{
        flex:1,
        padding:'5%',
        margin:'5%',
        flexDirection:'column',
        backgroundColor: '#bbb',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
    },
    sort:{
        flex:1,
        marginVertical:'5%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        flex:1,
        width:'50%',
        paddingVertical:'2.5%',
        marginHorizontal:'5%',
        flexDirection:'column',
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
    },
    sortText:{
        fontWeight:'bold',
    }
})
  
export const AppStyle = styles.app
export const MainStyle = styles.main
export const ScreenStyle = styles.screen
```

# Komponenty

## SortAndFilter.js

```js
import React, {Component} from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ScreenStyle } from '../Styles';

// Komponent wyświetlający liste elementów, korzysta z .map()
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

    // Odpowiada za sortowanie
    sortowanie = () =>{
        this.state.tablicaLiczb.sort((a,b) => a > b ? 1:-1)
        this.forceUpdate()
    }
    
    // Ponowne generowanie tablicy
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
```

#### Widok za starcie
![SortAndFilter1](https://i.imgur.com/SKGyvGk.png)

#### Widok po kliknięciu **"Sortuj"**
![SortAndFilter2](https://i.imgur.com/JseWyub.png)

#### Widok po kliknięciu **"Randomizuj"**
![SortAndFilter3](https://i.imgur.com/T4WPdHN.png)



## LazyLoading.js

Demonstruje działanie **Reacr.lazy()**. Dałowany jest komponent **ComponentToLoad**

Istotne jest aby pamiętac o skorzystaniu z **Suspense**

```js
import React, {Component, Suspense} from 'react';
import { Text, View } from 'react-native';
import { ScreenStyle } from '../Styles';

const OtherComponent = React.lazy(() => import('./ComponentToLoad'))

export default class LazyLoading extends Component {
    render(){ 
        return (
            <View style={ScreenStyle.view}>
                <View style={[ScreenStyle.content,{flex:1,marginBottom:'5%'}]}>
                    <Text>Przykład 'Lazy loading'.</Text>
                    <Text>Komponent ComponentToLoad jest ładowany/umieszczany za pomocą React.lazy()</Text>
                </View>
                <View style={[ScreenStyle.content,ScreenStyle.center,{flex:9}]}>
                    <Suspense fallback={<Text>Ładowanie...</Text>}>
                        <OtherComponent length="100000"/>
                    </Suspense>
                </View>
            </View>
        )
    };
}
```

#### Widok jak komponent sie ładuje
![LazyLoading1](https://i.imgur.com/x4W4qTD.png)

#### Widok jak komponent sie załadował
![LazyLoading2](https://i.imgur.com/YNqSd2D.png)


## ComponentToLoad.js

Generuje randomowy tekst o podanej długości w **props.length** z palety *ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*

```js
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class ComponentToLoad extends Component {
    constructor(props){
        super(props)

        const length = props.length ? props.length : 0
        
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        this.state = { text: result }
    }
    render(){ 
        return (
            <ScrollView>
                <Text>{this.state.text}</Text>
            </ScrollView>
        )
    };
}
```


## FirstStepProgress.js

Jedynie podano kolor jako czarny aby był w ogóle widoczny.

```js
import React, {Component} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import { ScreenStyle } from '../Styles';

export default class FirstStepProgress extends Component {
    render(){ 
        return (
            <View style={ScreenStyle.view}>
                <View style={[ScreenStyle.content,{flex:1,marginBottom:'5%'}]}>
                    <Text>Domyślny 'ActivityIndicator', nie ostylowany.</Text>
                    <Text>Jedynie podano kolor jako czarny aby był w ogóle widoczny.</Text>
                </View>
                <View style={[ScreenStyle.content,ScreenStyle.center,{flex:9}]}>
                    <ActivityIndicator
                        color = '#000'/>
                </View>
            </View>
        )
    };
}
```

![FirstStepProgress](https://i.imgur.com/4bq9UYM.png)

## SecondStepProgress.js

Zmieniony został kolor na elektryczny odcień niebieskiego jak i rozmiar na 'large'.

```js
import React, {Component} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import { ScreenStyle } from '../Styles';

export default class SecondStepProgress extends Component {
    render(){ 
        return (
            <View style={ScreenStyle.view}>
                <View style={[ScreenStyle.content,{flex:1,marginBottom:'5%'}]}>
                    <Text>Drugi przykład 'ActivityIndicator', tym razem ostylowany.</Text>
                    <Text>Zmieniony został kolor na elektryczny odcień niebieskiego jak i rozmiar na 'large'.</Text>
                </View>
                <View style={[ScreenStyle.content,ScreenStyle.center,{flex:9}]}>
                    <ActivityIndicator
                        size = 'large'
                        color = '#0892d0'/>
                </View>
            </View>
        )
    };
}
```

![SecondStepProgress](https://i.imgur.com/3aIyE1O.png)

## ThirdStepProgress.js

Animacja sotała odwrócona stylem (transform). Próba wyłączenia animacji komponentu kończy się tym że nie jest on widoczny.

```js
import React, {Component} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import { ScreenStyle } from '../Styles';

export default class ThirdStepProgress extends Component {
    render(){ 
        return (
            <View style={ScreenStyle.view}>
                <View style={[ScreenStyle.content,{flex:1,marginBottom:'5%'}]}>
                    <Text>Ostatni 'ActivityIndicator'.</Text>
                    <Text>Animacja sotała odwrócona stylem (transform). Próba wyłączenia animacji komponentu kończy się tym że nie jest on widoczny.</Text>
                </View>
                <View style={[ScreenStyle.content,ScreenStyle.center,{flex:9}]}>
                    <ActivityIndicator
                        animating = {true}
                        size = 'large'
                        color = '#00f'
                        style={{transform: [{ scaleX: -1 }]}}/>
                </View>
            </View>
        )
    };
}
```

![ThirdStepProgress](https://i.imgur.com/OCTUXgk.png)
