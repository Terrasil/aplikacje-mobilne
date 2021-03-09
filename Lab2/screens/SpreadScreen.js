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
