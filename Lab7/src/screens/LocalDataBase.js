import React, {Component } from 'react';
import { Alert, Button, Modal, ScrollView,Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import * as SQLite from 'expo-sqlite';
import { AntDesign,Feather} from '@expo/vector-icons';
import {ScreenStyle} from '../Styles'

// baza danych
var db;

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

const ListaLiczb = ({ owner, lista }) => {
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

    choose(name){
        // otwieranie istniejącego pliku lub ...
        // tworzenie pliku zawierającego nasz bazę SQLite
        db = SQLite.openDatabase(name);
        this.setState({messageInfoToast:"Aktualna baza danych to " + name,showInfoToast:true,listaZadan: []})   
    }
    create(){
        // tworzenie tablicy o ile nie istnieje w bazie danych
        db.transaction(query => {
            query.executeSql('CREATE TABLE IF NOT EXISTS zadania (id INTEGER PRIMARY KEY ASC NOT NULL, tresc TEXT NOT NULL, wykonano INT NOT NULL);',[],()=>{
                this.setState({dataBaseIsExist: true,messageInfoToast:"Utworzono tablicę w bazie danych!",showInfoToast:true}) 
            }); 
        }); 
    }
    drop(){
        // usuwanie tablicy z bazie danych
        db.transaction(query => {
            query.executeSql('DROP TABLE zadania',[]);
            this.setState({ listaZadan: [], dataBaseIsExist: false,messageInfoToast:"Usunięto tablicę z bazy danych!",showInfoToast:true})
        });
    }
    // pobieranie danych z bazy
    update() { 
        db.transaction(query => {
            query.executeSql('SELECT * FROM zadania', [], 
            (_, { rows: { _array } }) => this.setState({ listaZadan: _array }));
        });
    }
    // zmiana wykonania
    changeStatus(id, value){
        // usuwanie tablicy z bazie danych
        db.transaction(query => {
            query.executeSql('UPDATE zadania SET wykonano = ? WHERE id = ?',[value, id]);
            this.setState({ messageInfoToast:"Zaktualizowano zadanie",showInfoToast:true})
        });
    }
    // usuwanie elementu
    deleteElement(id){
        // usuwanie tablicy z bazie danych
        db.transaction(query => {
            query.executeSql('DELETE FROM zadania WHERE id = ?',[id]);
            this.setState({ messageInfoToast:"Usunięto zadanie",showInfoToast:true})
        });
    }
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
    // usunięcie zadania o podanym ID z bazy 
    remove(id) {
        // nie moze być puste
        if (id === null || id=== "") {
            return false;
        }else{
            db.transaction(query => {
                query.executeSql('DELETE FROM zadania WHERE id = ?', [id], 
                    (tx, results) => {     
                    if (results.rowsAffected > 0) {
                        console.log('Delete success');    
                        this.setState({messageInfoToast:"Usunięto wybrany element!"})            
                    } else {
                        console.log('Delete failed');
                        this.setState({messageInfoToast:"Wystąpił błąd w trakcie usuwania!"})  
                    }
                    this.setState({showInfoToast:true})
                });
            });
        }
    }

    // modal z regordami zadań z bazy danych
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
                    <ListaLiczb owner={this} textStyle={ScreenStyle.item} lista={this.state.listaZadan} />
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
}