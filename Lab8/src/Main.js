import React, {Component} from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LocationScreen from './screens/LocationScreen'

const Drawer = createDrawerNavigator();

export default class Main extends Component {
    render(){ 
        return (
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Lokalizaczja expo-location">
                    <Drawer.Screen name="Lokalizaczja expo-location" component={LocationScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        )
    };
}