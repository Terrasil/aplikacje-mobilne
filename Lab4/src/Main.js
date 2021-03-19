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