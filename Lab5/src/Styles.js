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

    
    scrollView:{
        alignContent:'center',
        flexDirection: 'column',
        alignItems: 'baseline',
    },
    scrollViewIndicator:{
        alignContent:'space-between',
        flexDirection: 'column',
        alignItems: 'center',
    },
    scrollIndicatorStyle:{
        backgroundColor:'#048',
    },
    scrollIndicatorContainerStyle:{
        width:200,
    },
    scrollViewStyle:{
    },
    viewBox: {
        width: 128,
        height: 128,
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
    textInput:{
        backgroundColor: '#ddd',
        marginVertical:'2%',
        padding:'3%',
        width:'75%',
    },

    swipeable:{
        flex:1,
        width:'100%',
        flexDirection: 'column',
        backgroundColor:'white',
        marginBottom:'1%',
    },
    swipeableText:{
        flex:1,
        width:'100%',
        flexDirection: 'column',
        backgroundColor:'white',
        padding:'10%',
    },
    swipeableTextCompleted:{
        flex:1,
        width:'100%',
        flexDirection: 'column',
        backgroundColor:'lime',
        padding:'10%',
    },
    swipeableTextUnCompleted:{
        flex:1,
        width:'100%',
        flexDirection: 'column',
        backgroundColor:'orangered',
        padding:'10%',
    },
    toDoBox:{
        flex:1,
        width:'100%',
        flexDirection: 'column',
        backgroundColor:'white',
    },
    loading:{
        flex:1,
        width:'100%',
        height:'100%',
        flexDirection: 'column',
        backgroundColor:'white',
        alignItems: 'center',
        paddingVertical:'75%',
    },
})

  
export const AppStyle = styles.app
export const ScreenStyle = styles.screen