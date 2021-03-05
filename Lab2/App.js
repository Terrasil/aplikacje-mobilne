import React from "react";
import { NavigationNativeContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import  SpreadOperatorScreen  from './screens/SpreadOperatorScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ title: "Informacje o Spread Operatorze" }}
          name="SpreadOperatorScreen"
          component={SpreadOperatorScreen}
        />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}