# Aplikacje mobilne
### Laboratorium 7

### Autor: Patryk Morawski, 185ic_a1

## Narzędzia

Jako podstawę aplikacji wykorzystałem kod z [Lab4](https://github.com/Terrasil/aplikacje-mobilne/tree/main/Lab4).

#### Dodatkowe moduły

 - expo-sqlite
 
 ``` expo install expo-sqlite ```
 
#### Struktura plików:
```
  ./src
   ├── /screens
   │   └── LocalDataBase.js
   ├── Main.js
   └── Styles.js
```

## Działanie

Aplikacja demonstruje działanie SQLite na lokalnych plikach **.db** *(bazodanowe)*. Możemy wykorzystać ją do zarządzania zadaniami zapisanymi w różnych plikach.

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
import LocalDataBase from './screens/LocalDataBase'

const Drawer = createDrawerNavigator();

export default class Main extends Component {
    render(){ 
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Lokalna baza SQLite">
                    <Drawer.Screen name="Lokalna baza SQLite" component={LocalDataBase} />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    };
}
```
#### Wykorzystałem expo-sqlite na jednym ekranie
![Main](https://i.imgur.com/beThqtj.png)


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
        width:'90%',
        minHeight:'20%',
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
    buttonRound:{
        backgroundColor:"#08f",
        width:'100%',
        paddingVertical:'5%',
        marginTop:'30%',
    },
    infoTextTitle:{
        fontSize:24,
        fontWeight:'bold',
    },
    infoText:{
        fontSize:24,
    },
    whiteText:{
        color:'#fff',
        fontSize:16,
    },
    dataBasePanel:{
        alignSelf:'stretch',
        flexDirection: 'row',
        alignItems: "stretch"
    },
    dataBasePanelInner:{
        flex:1,
        alignSelf:'stretch',
        flexDirection: 'column',
        alignItems: "stretch"
    },
    dataBasePanelButton:{
        backgroundColor:"#f00",
        paddingVertical:'5%',
        width:'50%',
        alignSelf:'stretch',
    },
    itemBox:{
        backgroundColor:'#ddd',
        flexDirection: 'row',
        padding:'5%',
    },
    itemBoxTitle:{
        backgroundColor:'#555',
        flexDirection: 'row',
        paddingVertical:'2%',
        paddingHorizontal:'5%',
    },
})

  
export const AppStyle = styles.app
export const ScreenStyle = styles.screen
```

# Szczegóły

#### Importy i deklaracja zmiennej bazodanowej
```js
import React, {Component } from 'react';
import { Alert, Button, Modal, ScrollView,Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import * as SQLite from 'expo-sqlite';
import { AntDesign,Feather} from '@expo/vector-icons';
import {ScreenStyle} from '../Styles'

// baza danych
var db;
```

### Starowy widok aplikacji
![start](https://i.imgur.com/QK82iEJ.png)

Aplikacja domyślnie tworzy plik 'default.db' jako startowa baza danych i dodaje do niej tablice 'zadania'.

#### State i funkcje inicializacyjne
```js
export default class LocalDataBase extends Component {
    state = {
        dataBaseName:'default',
        dataBaseIsExist: false,
        tableNmae:'zadania',
        listaZadan: null,
        showDataBase: false,
        showInfoToast: false,
        messageInfoToast:'',
        showAlert: false, // jako fix, bez tej zmiennej alert pojawia się setki razy (przy kazdym renderze)
        trescZadania: ''
    }
    
    componentDidMount() {
        this.choose(this.state.dataBaseName)
        this.create()
        this.update()
    }

    render(){ 
        return (
            <>
                <View style={ScreenStyle.titleBox}>
                    <Text style={ScreenStyle.titleText}>Lokalna baza SQLite</Text>
                </View>
                { this.state.showDataBase && this.renderDataBase() }
                <ScrollView contentContainerStyle={[ScreenStyle.scrollView,{flex:1,flexDirection: 'column'}]}>
                    <View style={ScreenStyle.section}/>
                    <View style={ScreenStyle.section}>
                        <View style={ScreenStyle.cenetrHorizontaly}>
                            <View style={[ScreenStyle.centerVerticaly,{alignItems:'flex-end'}]}>
                                <View style={{flexDirection: 'row',justifyContent:'center'}}>
                                    <TextInput onEndEditing={event =>{this.setState({dataBaseName: event.nativeEvent.text.trim()})}} placeholder="Nazwa bazy danych" defaultValue="default" style={ScreenStyle.textInput}/>
                                </View>
                            </View>
                            <View style={[ScreenStyle.centerVerticaly,{alignItems:'flex-start'}]}>
                                <Button
                                    title='Wybierz bazę danych'
                                    style={ScreenStyle.button}
                                    onPress={()=>{this.choose(this.state.dataBaseName)}}
                                >
                                </Button>
                            </View>
                        </View>
                    </View>
                    <View style={ScreenStyle.section}/>
                    <View style={ScreenStyle.section}>
                        <View style={ScreenStyle.cenetrHorizontaly}>
                            <View style={[ScreenStyle.centerVerticaly,{alignItems:'flex-end'}]}>
                                <View style={{flexDirection: 'row',justifyContent:'center'}}>
                                    <TextInput onEndEditing={event =>{this.setState({trescZadania: event.nativeEvent.text})}} placeholder="Zadanie do wykonania" style={ScreenStyle.textInput}/>
                                </View>
                            </View>
                            <View style={[ScreenStyle.centerVerticaly,{alignItems:'flex-start'}]}>
                                {this.state.dataBaseIsExist ? 
                                    <Button
                                        title=' ＋ Dodaj zadanie '
                                        style={ScreenStyle.button}
                                        onPress={()=>{this.add(this.state.trescZadania)}}
                                    >
                                    </Button>
                                :
                                    <Button
                                        color='#999'
                                        disabled
                                        title=' Brak bazy danych! '
                                        style={ScreenStyle.button}
                                    >
                                    </Button>
                                }
                            </View>
                        </View>
                    </View>
                    <View style={ScreenStyle.section}>
                        <View style={ScreenStyle.cenetrHorizontaly}>
                            <View style={[ScreenStyle.centerVerticaly,{alignItems:'flex-start'}]}>
                                <TouchableOpacity
                                    style={[ScreenStyle.buttonRound,{alignItems:'center'}]}
                                    onPress={() => this.setState({showDataBase: true})}
                                >
                                    <AntDesign name="database" size={32} color="white">
                                    </AntDesign>
                                    <Text style={{fontSize:16,color:'#fff'}}>{`\n`}PODGLĄD BAZY DANYCH</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={ScreenStyle.section}/>
                </ScrollView>
                <Toast visible={this.state.showInfoToast} message={this.state.messageInfoToast} />
            </>
        )
    };
```

#### Wybór pliku z danymi
```js
choose(name){
    // otwieranie istniejącego pliku lub ...
    // tworzenie pliku zawierającego nasz bazę SQLite
    db = SQLite.openDatabase(name);
    this.setState({messageInfoToast:"Aktualna baza danych to " + name,showInfoToast:true,listaZadan: []})   
}
```

#### Tworzenie tablicy 'zadania'
```js
create(){
    // tworzenie tablicy o ile nie istnieje w bazie danych
    db.transaction(query => {
        query.executeSql('CREATE TABLE IF NOT EXISTS zadania (id INTEGER PRIMARY KEY ASC NOT NULL, tresc TEXT NOT NULL, wykonano INT NOT NULL);',[],()=>{
            this.setState({dataBaseIsExist: true,messageInfoToast:"Utworzono tablicę w bazie danych!",showInfoToast:true}) 
        }); 
    }); 
}
```

#### Pobieranie danych z bazy
```js
update() { 
    db.transaction(query => {
        query.executeSql('SELECT * FROM zadania', [], 
        (_, { rows: { _array } }) => this.setState({ listaZadan: _array }));
    });
}
```

#### Toast
```js
const Toast = ({ visible, message }) => {
    if (visible) {
        ToastAndroid.showWithGravityAndOffset(
            message,
            100,
            ToastAndroid.BOTTOM,
            25,
            50
        );
        return null;
    }
    return null;
};
```
 
### Dodawanie zadania
![add](https://i.imgur.com/bKeJcTf.png)

#### Pobieranie danych z bazy
```js
// dodanie zadania do bazy
add(value) {
    // nie moze być puste
    if (value === null || value === "") {
        return false;
    }else{
        db.transaction(query => {
            query.executeSql('INSERT INTO zadania(tresc, wykonano) VALUES (?, ?)', [value, 0], 
                (tx, results) => {     
                    if (results.rowsAffected > 0) { 
                        this.setState({messageInfoToast:"Dodano: " + value})         
                    } else {
                        this.setState({messageInfoToast:"Wystąpił błąd w trakcie dodawania!"})   
                    }
                    this.setState({showInfoToast:true})
                }
            );
        });
    }
}
```

### Wyświetlanie bazy danych
![lista](https://i.imgur.com/1zSNkBn.png)

TouchableOpacity u dołu ekranu pozwala wyświetlić modal który zawiera dane z aktualnie obsługiwanego pliku w postaci interaktywnej listy.

#### Funkcja renderująca (MODAL)
```js
renderDataBase() {
    // odzwierzanie przed wyswietleniem listy rekordów
    this.update()
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.showDataBase}
            onRequestClose={() => {
                this.setState({showDataBase: !showDataBase});
            }}
        >
            <Button
                title='ZMINIMALIZUJ'
                style={ScreenStyle.button}
                onPress={() => this.setState({showInfoToast:false,showDataBase: false})}
            >
            </Button>
            <ScrollView contentContainerStyle={[ScreenStyle.scrollView,{flex:1,flexDirection: 'column'}]}>
                <Lista owner={this} textStyle={ScreenStyle.item} lista={this.state.listaZadan} />
            </ScrollView>
            <View style={ScreenStyle.dataBasePanel}>
                <View style={ScreenStyle.dataBasePanelInner}>
                    <Button
                        color="#080"
                        title='STWÓRZ BAZĘ'
                        style={ScreenStyle.dataBasePanelButton}
                        onPress={() => {
                            Alert.alert('TWORZENIE','Czy jesteś pewien że chcesz stworzyć tablicę w aktualnej bazie danych?',
                                [
                                    {
                                    text: 'TAK',
                                        onPress: () => {
                                            this.create()
                                        }
                                    },
                                    {
                                        text: '', onPress: () => {}
                                    },
                                    {
                                        text: 'NIE', onPress: () => {}
                                    },
                                ],
                                    {cancelable: true},
                                );
                        }}
                    >
                    </Button>
                </View>
                <View style={ScreenStyle.dataBasePanelInner}>
                    <Button
                        color="#f00"
                        title='USUŃ BAZĘ'
                        style={ScreenStyle.dataBasePanelButton}
                        onPress={() => {
                            Alert.alert('USUWANIE','Czy jesteś pewien że chcesz usunąć tablicę w aktualnej bazie danych?',
                                [
                                    {
                                    text: 'TAK',
                                        onPress: () => {
                                            this.drop()
                                        }
                                    },
                                    {
                                        text: '', onPress: () => {}
                                    },
                                    {
                                        text: 'NIE', onPress: () => {}
                                    },
                                ],
                                    {cancelable: true},
                                );
                        }}
                    >
                    </Button>
                </View>
            </View>
        </Modal>
    );
}
```

#### Komponent Lista
```js
const Lista = ({ owner, lista }) => {
    // wyswietlanie listy elementów
    if (lista) {
        return (
            <>
                <View key={0} style={ScreenStyle.itemBoxTitle}>
                    <Text style={{fontSize: 20,fontWeight:'bold',flex:1,color:'white'}}>ID</Text>
                    <Text style={{fontSize: 20,flex:8,color:'white'}}>TREŚĆ</Text>
                </View>    
                {lista.map(liczba => 
                    <View key={liczba.id} style={ScreenStyle.itemBox}>
                        <Text style={{fontSize: 20,fontWeight:'bold',flex:1}}>{liczba.id}</Text>
                        <Text style={liczba.wykonano? {fontSize: 20,textDecorationLine: 'line-through', textDecorationStyle: 'solid',flex:8}: {fontSize: 20,flex:8}}>{liczba.tresc}</Text>
                        {liczba.wykonano ? 
                            <Feather name="check-square" size={24} color="black" onPress={() => {
                                owner.changeStatus(liczba.id,0)
                            }}/>
                        :
                            <Feather name="square" size={24} color="black" onPress={() => {
                                owner.changeStatus(liczba.id,1)
                            }}/>
                        }
                        <AntDesign name="delete" size={24} color="black" onPress={() => {
                                Alert.alert('USUWANIE','Czy jesteś pewien że chcesz usunąć zadanie z bazy danych?',
                                    [
                                        {
                                        text: 'TAK',
                                            onPress: () => {
                                                owner.deleteElement(liczba.id)
                                            }
                                        },
                                        {
                                            text: '', onPress: () => {}
                                        },
                                        {
                                            text: 'NIE', onPress: () => {}
                                        },
                                    ],
                                        {cancelable: true},
                                    );
                            }}/>
                    </View>)
                }
            </>
        );
    }
};
```
#### Interakcja (zmiana statuzu wykonania + zapis do bazy)
![interakcja](https://i.imgur.com/QbMLzlO.png)

#### Zmiana statuzu wykonania
```js
// zmiana wykonania
changeStatus(id, value){
    // usuwanie tablicy z bazie danych
    db.transaction(query => {
        query.executeSql('UPDATE zadania SET wykonano = ? WHERE id = ?',[value, id]);
        this.setState({ messageInfoToast:"Zaktualizowano zadanie",showInfoToast:true})
    });
}
```

![deleteTask](https://i.imgur.com/3paRHEd.png)

#### Usuwanie rekordu z bazy
```js
// usuwanie elementu
deleteElement(id){
    // usuwanie tablicy z bazie danych
    db.transaction(query => {
        query.executeSql('DELETE FROM zadania WHERE id = ?',[id]);
        this.setState({ messageInfoToast:"Usunięto zadanie",showInfoToast:true})
    });
}
```

#### Widok na dwa zadania (od góry wykonane a następnie jeszcze nie wykonane)
![](https://i.imgur.com/pS3Cl0J.png)

### Zmiana bazy
![](https://i.imgur.com/x2sdgY5.png)

Zmiana bazy na 'amw'. Jeżeli plik nie istnieje to zostanie utworzony (tak jak w tym przypadku). Jednocześnie  automatycznie jest tworzona tablica 'zadania'.

#### Usuwanie tablicy 'zadania'
![](https://i.imgur.com/GepkA5W.png)

Możemy usunąc tablicea zadania a nastepnie ją spowrotem dodać aby szybko ją oczyśćić.

#### Dodawanie nowych zadań nie jest możliwe jeżeli tablica nie istnieje
![](https://i.imgur.com/c7YOHHP.png)

#### Ponowne dodanie tablicy 'zadania'
![](https://i.imgur.com/SUyrKYy.png)

#### Widok innej bazy danych
![](https://i.imgur.com/pUmDPVg.png)
