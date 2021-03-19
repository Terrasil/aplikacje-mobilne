import React, {Component, useState } from 'react';
import { ScreenStyle } from '../Styles';
import {Picker} from '@react-native-picker/picker';
import { View, Text,ScrollView } from "react-native";

class Select extends Component {
    state = {selectedValue: 'Wybierz'}
    setSelectedValue = (selectedValue) => {
        if (selectedValue){
            this.setState({ selectedValue: selectedValue })
        }
    }
    render() {
        return (
            <View>
                <Picker selectedValue = {this.state.selectedValue} onValueChange = {this.setSelectedValue}>
                    {this.props.items ? this.props.items.map(item => <Picker.Item key = {item.id} label = {item.name ? item.name : item.title} value = {item.id}/>) : <Picker.Item key = {0} label = "Brak" value = {false}/>}
                </Picker>
            </View>
        )
    }
}

export default class SelectsScreen extends Component {
    constructor(props){
        super(props)
        const options = [
            { id: 'red', name: 'Czerwony' },
            { id: 'green', name: 'Zielony' },
            { id: 'blue', title: 'Niebieski' },
            { id: 'yellow', title: 'Zółty' },
            { id: 'orange', name: 'Pomarańczowy' },
            { id: 'pink', title: 'Różowy' }
        ]
        this.state = {options}
    }
    async componentDidMount() {
        const responsePosts = await fetch(`https://jsonplaceholder.typicode.com/posts`); 
        const jsonPosts = await responsePosts.json();
        this.setState({ posts: jsonPosts });

        const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments`);
        const jsonComments = await responseComments.json();
        this.setState({ comments: jsonComments });

        const responseAlbums = await fetch(`https://jsonplaceholder.typicode.com/albums`);
        const jsonAlbums = await responseAlbums.json();
        this.setState({ albums: jsonAlbums });

        const responsePhotos = await fetch(`https://jsonplaceholder.typicode.com/photos`);
        const jsonPhotos = await responsePhotos.json();
        this.setState({ photos: jsonPhotos });

        const responseToDos = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const jsonToDos = await responseToDos.json();
        this.setState({ todos: jsonToDos });

        const responseUsers = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const jsonUsers = await responseUsers.json();
        this.setState({ users: jsonUsers });
    }
    render(){ 
        return (
            <>
                <View style={ScreenStyle.titleBox}>
                    <Text style={ScreenStyle.titleText}>Komponent Select</Text>
                </View>
                <ScrollView style={ScreenStyle.contentBox}>
                    <>
                        <Text style={ScreenStyle.textBold}>Select z ustawionymi opcjami na sztywno</Text>
                        <Text>options</Text>
                        <Select style={ScreenStyle.textInput} items={this.state.options}/><Text/>
                    </>
                    <>
                        <Text style={ScreenStyle.textBold}>Select z pobieranymi opcjami asynchronicznie</Text>
                        <Text>posts</Text>
                        <Select style={ScreenStyle.textInput} items={this.state.posts}/><Text/>
                    </>
                    <>
                        <Text style={ScreenStyle.textBold}>Select z pobieranymi opcjami asynchronicznie</Text>
                        <Text>comments</Text>
                        <Select style={ScreenStyle.textInput} items={this.state.comments}/><Text/>
                    </>
                    <>
                        <Text style={ScreenStyle.textBold}>Select z pobieranymi opcjami asynchronicznie</Text>
                        <Text>albums</Text>
                        <Select style={ScreenStyle.textInput} items={this.state.albums}/><Text/>
                    </>
                    <>
                        <Text style={ScreenStyle.textBold}>Select z pobieranymi opcjami asynchronicznie</Text>
                        <Text>photos</Text>
                        <Select style={ScreenStyle.textInput} items={this.state.photos}/><Text/>
                    </>
                    <>
                        <Text style={ScreenStyle.textBold}>Select z pobieranymi opcjami asynchronicznie</Text>
                        <Text>todos</Text>
                        <Select style={ScreenStyle.textInput} items={this.state.todos}/><Text/>
                    </>
                    <>
                        <Text style={ScreenStyle.textBold}>Select z pobieranymi opcjami asynchronicznie</Text>
                        <Text>users</Text>
                        <Select style={ScreenStyle.textInput} items={this.state.users}/><Text/>
                    </>
                </ScrollView>
            </>
        )
    };
}