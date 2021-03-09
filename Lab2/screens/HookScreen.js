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
