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