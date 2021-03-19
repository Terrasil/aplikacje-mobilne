import React, {Component} from 'react';
import { ActivityIndicator, Button, ScrollView, Text, View } from 'react-native';
import { ScreenStyle } from '../Styles';
import { ReactDOM } from 'react-dom';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';

class Loading extends Component{
    render(){
        return(
            <View style={ScreenStyle.loading}>
                <View>
                    <ActivityIndicator size = 'large'color = '#0892d0'/>
                    <Text>{this.props.children}</Text>
                </View>
            </View>
        )
    }
}
class SwipeableItem extends Component{
    action = () => {
        return (
            <>
                <View style={ScreenStyle.toDoBox}>
                    <Animated.Text style={this.props.completed ? ScreenStyle.swipeableTextCompleted : ScreenStyle.swipeableTextUnCompleted}>
                        {this.props.completed ? `Już wykonano!`:`Jeszcze nie wykonano!`}
                    </Animated.Text>
                </View>
            </>
        )
    }
    render(){
            return(
            <Swipeable index={this.props.index} containerStyle={ScreenStyle.swipeable} renderLeftActions={this.action}>
                <View index={this.props.index} style={ScreenStyle.toDoBox}>
                    <Text index={this.props.index} style={ScreenStyle.swipeableText}>
                        {this.props.title}
                    </Text>
                </View>
            </Swipeable>
        );
    }
}
class SwipeableList extends Component{
    render(){
        return(
            <>
                {this.props.items ? this.props.items.map(item => <SwipeableItem completed={item.completed} key = {item.id} title = {item.title}/>) : <Loading>Ładowanie...</Loading>}
            </> 
        )
    }
}
export default class SwipeableScreen extends Component {
    state = {
        todos: ''
    }
    async componentDidMount() {
        const responseToDos = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const jsonToDos = await responseToDos.json();
        this.setState({ todos: jsonToDos });
    }
    render(){ 
        return (
            <>
                <View style={ScreenStyle.titleBox}>
                    <Text style={ScreenStyle.titleText}>Komponent Swipeable</Text>
                </View>
                <ScrollView contentContainerStyle={[ScreenStyle.scrollView,{backgroundColor:'#ddd'}]}>
                    <SwipeableList items={this.state.todos}/>
                </ScrollView>
            </>
        )
    };
}