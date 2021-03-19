import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { AppStyle } from './src/Styles';
import Main from './src/Main'

export default function App() {
  return (
    <SafeAreaView style={AppStyle.safeArea}>
      <Main></Main>
    </SafeAreaView>
  );
}