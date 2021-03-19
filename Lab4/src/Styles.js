import { StyleSheet } from 'react-native';

const styles = {}

styles.app = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#222',
        marginTop:'12%',
    },
})

styles.screen = StyleSheet.create({
    titleBox:{
        backgroundColor: '#08f',
        height:'8%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerVerticaly:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cenetrHorizontaly:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText:{
        color:'#fff',
        fontSize:20,
    },
    contentBox:{
        alignSelf:'stretch',
        padding:'3%',
    },
    textBold:{
        fontWeight:'bold',
    },
    hugeText:{
        flex: 1,
        fontWeight:'bold',
        fontSize:200,
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical : "center",
    },
    bigText:{
        flex: 1,
        fontWeight:'bold',
        fontSize:100,
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical : "center",
    },
    textInput:{
        backgroundColor: '#ddd',
        marginVertical:'2%',
        padding:'3%',
    }
})
  
export const AppStyle = styles.app
export const ScreenStyle = styles.screen