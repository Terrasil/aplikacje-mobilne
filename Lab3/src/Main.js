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