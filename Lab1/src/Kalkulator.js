import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default class Kalkulator extends Component {
  state = {
    displayValue: 'test'
  }
  test(){
    this.setState({
      displayValue: 'tekst'
    })
  }
  render(){ 
    return (
      <View style={styles.container}>
        <View style={styles.display}>
          <Text style={styles.displayText}>{this.state.displayValue}</Text>
        </View>
        <View style={styles.keyboard}>
          <View style={styles.keyboardLine}>
            <TouchableOpacity style={styles.buttonDark}>
              <Text style={styles.displayText}>AC</Text>
            </TouchableOpacity >
            <View style={styles.buttonDark}>
              <Text style={styles.displayText}> </Text>
            </View>
            <View style={styles.buttonDark}>
              <Text style={styles.displayText}> </Text>
            </View>
            <View style={styles.buttonDark}>
              <Text style={styles.displayText}>÷</Text>
            </View>
          </View>
          <View style={styles.keyboardLine}>
            <View style={styles.button}>
              <Text style={styles.displayText}>1</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.displayText}>2</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.displayText}>3</Text>
            </View>
            <View style={styles.buttonDark}>
              <Text style={styles.displayText}>x</Text>
            </View>
          </View>
          <View style={styles.keyboardLine}>
            <View style={styles.button}>
              <Text style={styles.displayText}>4</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.displayText}>5</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.displayText}>6</Text>
            </View>
            <View style={styles.buttonDark}>
              <Text style={styles.displayText}>-</Text>
            </View>
          </View>
          <View style={styles.keyboardLine}>
            <View style={styles.button}>
              <Text style={styles.displayText}>7</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.displayText}>8</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.displayText}>9</Text>
            </View>
            <View style={styles.buttonDark}>
              <Text style={styles.displayText}>+</Text>
            </View>
          </View>
          <View style={styles.keyboardLine}>
            <View style={styles.button}>
              <Text style={styles.displayText}>+/-</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.displayText}>0</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.displayText}>,</Text>
            </View>
            <View style={styles.buttonResult}>
              <Text style={styles.displayTextLight}>=</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    display: {
        flex: 1,
        backgroundColor: '#222',
        alignItems: 'flex-end',
        padding: 32,
        justifyContent: 'flex-end',
    },
    keyboard: {
        flex: 3,
        alignItems: 'stretch',
    },
    keyboardLine: {
        flex: 1,
        color:'#823',
        flexDirection:'row',
    },
    displayText: {
      color:'#888',
      fontSize:32,
    },
    displayTextLight: {
      color:'#FFF',
      fontSize:32,
    },
    button:{
      flex: 1,
      backgroundColor: '#111',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonDark:{
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonResult:{
      flex: 1,
      backgroundColor: '#458',
      alignItems: 'center',
      justifyContent: 'center',
    }
});