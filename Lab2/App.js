import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import  HomeScreen  from './screens/HomeScreen'
import  SpreadScreen  from './screens/SpreadScreen'
import  RestScreen  from './screens/RestScreen'
import  HookScreen  from './screens/HookScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Strona główna">
        <Stack.Screen name="Strona główna" component={HomeScreen} />
        <Stack.Screen name="Spread syntax" component={SpreadScreen} />
        <Stack.Screen name="Rest parameter" component={RestScreen} />
        <Stack.Screen name="useState hook" component={HookScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}