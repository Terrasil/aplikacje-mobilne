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
    textInput:{
        backgroundColor: '#ddd',
        marginVertical:'2%',
        padding:'3%',
        width:'90%',
        minHeight:'20%',
    },
    section:{
        flex:1,
        alignSelf:'stretch',
        alignContent:'center',
        alignItems: 'center',
    },
    button:{
        backgroundColor:"#08f",
        paddingHorizontal:'10%',
        paddingVertical:'5%',
        margin:'5%',
    },
    buttonRound:{
        backgroundColor:"#08f",
        width:'100%',
        paddingVertical:'5%',
        marginTop:'30%',
    },
    infoTextTitle:{
        fontSize:24,
        fontWeight:'bold',
    },
    infoText:{
        fontSize:24,
    },
    whiteText:{
        color:'#fff',
        fontSize:16,
    },
    dataBasePanel:{
        alignSelf:'stretch',
        flexDirection: 'row',
        alignItems: "stretch"
    },
    dataBasePanelInner:{
        flex:1,
        alignSelf:'stretch',
        flexDirection: 'column',
        alignItems: "stretch"
    },
    dataBasePanelButton:{
        backgroundColor:"#f00",
        paddingVertical:'5%',
        width:'50%',
        alignSelf:'stretch',
    },
    itemBox:{
        backgroundColor:'#ddd',
        flexDirection: 'row',
        padding:'5%',
    },
    itemBoxTitle:{
        backgroundColor:'#555',
        flexDirection: 'row',
        paddingVertical:'2%',
        paddingHorizontal:'5%',
    },
})

  
export const AppStyle = styles.app
export const ScreenStyle = styles.screen