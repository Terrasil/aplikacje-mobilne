# Aplikacje mobilne
aplikacje-mobilne

### Autor: Patryk Morawski, 185ic_a1

## Narzędzia

Aplikacja przygotowana w React Native / React-CLI z wykorzystaniem modułu EXPO.
Jako emulator wykorzystano AVD z Android Studio

## Działanie

Kalkulator pozwala na dodawanie **[+]**, odejmowanie **[‒]**, mnożenie **[×]**, dzielenie **[÷]**, dodawanie nawiadów **[(][)]**, usuwanie ostatniego wprowadzonego znaku **[RM]** oraz czyszczenie kalkulatora do wartości domyslnych **[CLR]**.
Aplikacja nie podaje obliczonej wartości wprowadzonego wzoru (można było by to bezproblemowo wprowadzić) zatem trzeba wcisnąć przycisk **[=]** aby otrzymac wynik.

## App.js

```js
import React from 'react';
import Kalkulator from './src/Kalkulator'

export default function App() {
  return (
    <Kalkulator></Kalkulator>
  );
}
```

## Komponent 'Kalkulator'

*Kod znajduje sie w folderze ./src*

#### Klasa

```js
export default class Kalkulator extends Component {
  state = {
    display: '', //<-- Wyświetlanie wzoru z zmienionymi znakami 'operatorami'
    formula: '', //<-- Wzór wykorzystywany do funkcji eval()
    result:  ''  //<-- Wynik obliczeń
  }
}
```

#### Metody

```js
// Przygotowuje wzór do wyświetlenia (zamienia znaki na przyjemniejsze do czytania)
prepareDisplay = () => { 
    this.setState({ display: this.state.formula.replace('/', '÷').replace('*', '×').replace('-', '‒')})
}

// Oblicza wzór (formula) z wykorzystaniem funcji eval() i aktualizuje wyświetlenie
calculate = () => {
  try {
    this.setState({ result: eval(this.state.formula)})
  } catch (err) {
    this.setState({ result: 'ERROR!'})
  }
  this.prepareDisplay()
} 

// Czyszci wyświetlacz i wzór
clear = () => {
  this.setState({
    display: '',
    formula: '',
    result: ''
  })
}

// Usuwa ostatni znak z wzoru i aktualizuje wyświetlenie
remove = () => {
  this.setState({ formula: this.state.formula.slice(0, -1) })
  this.prepareDisplay()
}

// Dodaje znak do wzoru i aktualizuje wyświetlenie
add = (value) => () => {
  this.setState({ formula: this.state.formula+value})
  this.prepareDisplay()
}
```
***eval()*** - *oblicza kod JavaScript przedstawiony jako ciąg znaków*

#### Render
Struktura aplikacji (*ustawiona na sztywno*)
```js
render(){ 
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{this.state.display}</Text>
        <Text style={styles.resultText}>{this.state.result}</Text>
      </View>
      <View style={styles.keyboard}>
        <View style={styles.keyboardLine}>
          <TouchableOpacity style={styles.buttonDelete} onPress={this.clear}>
            <Text style={styles.textLight}>CLR</Text>
          </TouchableOpacity >
          <TouchableOpacity style={styles.buttonDark} onPress={this.remove}>
            <Text style={styles.text}>RM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonDark,styles.bracketButtonFix]} onPress={this.add('(')}>
            <Text style={styles.text}>(</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonDark,styles.bracketButtonFix]} onPress={this.add(')')}>
            <Text style={styles.text}>)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDark} onPress={this.add('/')}>
            <Text style={styles.text}>÷</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.keyboardLine}>
          <TouchableOpacity style={styles.button} onPress={this.add('1')}>
            <Text style={styles.text}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.add('2')}>
            <Text style={styles.text}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.add('3')}>
            <Text style={styles.text}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDark} onPress={this.add('*')}>
            <Text style={styles.text}>×</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.keyboardLine}>
          <TouchableOpacity style={styles.button} onPress={this.add('4')}>
            <Text style={styles.text}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.add('5')}>
            <Text style={styles.text}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.add('6')}>
            <Text style={styles.text}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDark} onPress={this.add('-')}>
            <Text style={styles.text}>‒</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.keyboardLine}>
          <TouchableOpacity style={styles.button} onPress={this.add('7')}>
            <Text style={styles.text}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.add('8')}>
            <Text style={styles.text}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.add('9')}>
            <Text style={styles.text}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonDark} onPress={this.add('+')}>
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.keyboardLine}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>+/‒</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.add('0')}>
            <Text style={styles.text}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.add('.')}>
            <Text style={styles.text}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonResult} onPress={this.calculate}>
            <Text style={styles.textLight}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
```


#### Style
```js
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
    color:'#666',
    fontSize:24,
  },
  resultText: {
    color:'#888',
    fontSize:48,
  },
  text: {
    color:'#666',
    fontSize:32,
  },
  textLight: {
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
  },
  buttonDelete:{
    flex: 1,
    backgroundColor: '#400',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bracketButtonFix:{
    flex: 0.5
  }
});
```

## Wygląd aplikacji
![aplikacja](https://i.imgur.com/NrGIEtP.png)

  - **display**: 5.25×13÷(9‒(2+3))
  - **formula**: 5.25\*13/(9-(2+3))
  - **result**: 17.0625
