import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function Przycisk(text){
    return(
        <TouchableOpacity style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{this.props.text}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appButtonContainer: {
        flex: 0.1,
        flexDirection:'column', 
        justifyContent:'center',
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});