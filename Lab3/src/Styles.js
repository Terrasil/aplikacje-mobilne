import { StyleSheet } from 'react-native';

const styles = {}

styles.app = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#222',
        marginTop:'12%',
    },
})
styles.main = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#222',
        marginTop:'12%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
})

styles.screen = StyleSheet.create({
    view:{
        flex:1,
        padding:'5%',
        flexDirection:'column',
    },
    center:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    content:{
        flex:1,
        padding:'5%',
        flexDirection:'column',
        backgroundColor: '#ddd',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
    },
    item:{
        flex:1,
        padding:'5%',
        margin:'5%',
        flexDirection:'column',
        backgroundColor: '#bbb',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
    },
    sort:{
        flex:1,
        marginVertical:'5%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        flex:1,
        width:'50%',
        paddingVertical:'2.5%',
        marginHorizontal:'5%',
        flexDirection:'column',
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
    },
    sortText:{
        fontWeight:'bold',
    }
})
  
export const AppStyle = styles.app
export const MainStyle = styles.main
export const ScreenStyle = styles.screen