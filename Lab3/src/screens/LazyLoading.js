import React, {Component, Suspense} from 'react';
import { Text, View } from 'react-native';
import { ScreenStyle } from '../Styles';

const OtherComponent = React.lazy(() => import('./ComponentToLoad'))

export default class LazyLoading extends Component {
    render(){ 
        return (
            <View style={ScreenStyle.view}>
                <View style={[ScreenStyle.content,{flex:1,marginBottom:'5%'}]}>
                    <Text>Przykład 'Lazy loading'.</Text>
                    <Text>Komponent ComponentToLoad jest ładowany/umieszczany za pomocą React.lazy()</Text>
                </View>
                <View style={[ScreenStyle.content,ScreenStyle.center,{flex:9}]}>
                    <Suspense fallback={<Text>Ładowanie...</Text>}>
                        <OtherComponent length="100000"/>
                    </Suspense>
                </View>
            </View>
        )
    };
}