/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
  PickerIOS,
  Switch,
  Button,
  Slider,
  ActionSheetIOS,
  TouchableHighlight,
  PixelRatio,
  Dimensions
} from 'react-native';


import Header from './src/component/header';
import BottomTab from './src/component/bottomTab';
import Home from './src/pages/home';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  state={language: 'java'}
  render() {
    let {width, height} = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <Header></Header>
        <Home></Home>
        <BottomTab></BottomTab>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    
  },

});
