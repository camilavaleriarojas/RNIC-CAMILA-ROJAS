/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView, View,
} from 'react-native';
import Card from './src/components/cards';


function App(): JSX.Element {

  return (
    <SafeAreaView >
      <Card/> 
    </SafeAreaView>
  );
}


export default App;
