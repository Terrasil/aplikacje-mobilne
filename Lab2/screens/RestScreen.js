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
