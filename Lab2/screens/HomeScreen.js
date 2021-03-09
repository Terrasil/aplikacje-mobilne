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