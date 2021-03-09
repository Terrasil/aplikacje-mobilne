
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