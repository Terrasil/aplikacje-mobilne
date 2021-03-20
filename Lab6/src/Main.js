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