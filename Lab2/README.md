# Aplikacje mobilne
aplikacje-mobilne

### Autor: Patryk Morawski, 185ic_a1

## Narzędzia

Aplikacja korzysta z **@react-navigation**.

Wykorzystane moduły:
  - *NavigationContainer* z **@react-navigation/native**
  - *Stack* tworzonego za pomoca funkcji 'createStackNavigator' z **@react-navigation/stack**

## Działanie

Aplikacja posiada menu z trzema opcjami ("Spread syntax", "Rest parameter" oraz "useState hook").

Po kliknięciu kazda z opci pokazuje nam opis danego elementu oraz przykładowy kod z jego wykorzystaniem.

Pliki z komponentami znajdują się w folderze **./src** jak i plik z stylami.

## App.js

Główny widok aplikacji posiada nawigator jednak wyświetlany jest domyślnie komponent ***HomeScreen***

```js
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
```
## styles.js

***styles** - główna struktóra styli*

***styles.home** - odpowiada za styl **HomeScreen.js***

***styles.info** - odpowiada za style pozostałych komponentów 'Screen'*

```js

import { StyleSheet } from 'react-native';

const styles = {}

styles.home = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginVertical:128,
    },
    button:{
        flex: 1,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 64,
        marginVertical: 32,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
    },
    text: {
        color:'#444',
        fontSize:24,
    },
});


styles.info = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal:32,
        paddingVertical:32,
    },
    example:{
        flex: 1,
        backgroundColor: '#444',
        justifyContent: 'center',
        marginHorizontal: 16,
        marginVertical: 32,
        paddingHorizontal:16,
        paddingVertical:16,
        borderRadius:8,
    },
    text: {
        color:'#444',
        fontSize:20,
    },
    code:{
        color:'#bbb',
        fontSize:16,
    }
});
  

export default styles
```

## HomeScreen.js

Menu głowne aplikacji

```js
import React from 'react';
import { TouchableOpacity, Text, View} from 'react-native';
import styles from './styles'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.home.container}>
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Spread syntax')}>
            <Text style={styles.home.text}>Spread syntax</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('Rest parameter')}>
            <Text style={styles.home.text}>Rest parameter</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.home.button} onPress={() => navigation.push('useState hook')}>
            <Text style={styles.home.text}>Hook useState</Text>
        </TouchableOpacity >
    </View>
  );
}
```

![homescreen](https://i.imgur.com/XYwzSk9.png)

## SpreadScreen.js

Panel z informacjiami na temat Spread syntax oraz przykładowy kod

```js
import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import styles from './styles'

const kod = `function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6`;

export default function SpreadScreen({ navigation }) {
  return (
    <ScrollView style={styles.info.container}>
    <Text style={styles.info.text}>Spread syntax pozwala na rozwinięcie iterowalnego wyrażenia, takiego jak wyrażenie tablicowe lub ciąg znaków, tam gdzie oczekiwanych jest zero lub więcej elementów. Pozwala również na rozwinięcie wyrażeń obiektowych w miejscach, gdzie oczekiwanych jest zero lub więcej par klucz-wartość (dla literałów obiektowych).</Text>
    <View style={styles.info.example}>
      <Text style={styles.info.code}>
        {kod}
      </Text>
    </View>
    </ScrollView>
  );
}
```

![spreadscreen](https://i.imgur.com/DNNLmER.png)

## RestScreen.js

Panel z informacjiami na temat Rest parameters oraz przykładowy kod

```js
import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import styles from './styles'

const kod = `function myF(...param) {
[...]
}

function printAbout(name = "Ala", ...other) { 
[...]
}`;

export default function RestScreen({ navigation }) {
  return (
    <ScrollView style={styles.info.container}>
      <Text style={styles.info.text}>Rest parameters pozwala na rozwinięcie iterowalnego wyrażenia, zapis ten umożliwia zbieranie w jedną zmienną (będącą tablicą) wielu parametrów przekazywanych do funkcji tam gdzie oczekiwanych jest zero lub więcej argumentów dla wywołań funkcji. Trzeba pamiętac aby ten zapis znajdwał sie jako ostatni parametr w kolejności.</Text>
      <View style={styles.info.example}>
        <Text style={styles.info.code}>
          {kod}
        </Text>
      </View>
    </ScrollView>
  );
}

```

![restscreen](https://i.imgur.com/Pv0a3Cr.png)

## HookScreen.js

Panel z informacjiami na temat useState hook'a oraz przykładowy kod

```js
import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import styles from './styles'

const kod = `import React, { useState } from 'react';

function Example() {
  // Zadeklaruj nową zmienną stanu, którą nazwiemy „count”
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Naciśnięto {count} razy</p>
      <button onClick={() => setCount(count + 1)}>
        Naciśnij mnie
      </button>
    </div>
  );
}`;

export default function HookScreen({ navigation }) {
  return (
    <ScrollView style={styles.info.container}>
      <Text style={styles.info.text}>Wywołujemy go z wewnątrz komponentu funkcyjnego, aby wzbogacić go o lokalny stan. React zachowa ten stan pomiędzy kolejnymi renderowaniami. useState zwraca parę: aktualną wartość stanu i funkcję, która pozwala go aktualizować. Możesz wywołać tę funkcję w procedurze obsługi zdarzenia albo z innego miejsca. Działa to mniej więcej tak samo, jak this.setState w komponencie klasowym, z tą różnicą, że nie scala on starych i nowych wartości.</Text>
      <View style={styles.info.example}>
        <Text style={styles.info.code}>
          {kod}
        </Text>
      </View>
    </ScrollView>
  );
}

```

![hookscreen](https://i.imgur.com/v5VNCHP.png)
