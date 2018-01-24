import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native';

import {Story, HotTopics, CardsList} from './components';

export default class Home extends Component{
  constructor(props){
      super(props);
  }

  render(){
    return (
      <ScrollView style={{flex:1}}>
        <Story></Story>
        <HotTopics></HotTopics>
        <CardsList></CardsList>
      </ScrollView>
    )
  }
}
