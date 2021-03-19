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