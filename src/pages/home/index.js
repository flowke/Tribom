import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from 'react-native';

import {Story, HotTopics, CardsList} from './components';

export default class Home extends Component{
  constructor(props){
      super(props);
  }

  render(){
    return (
      <ScrollView
        style={{flex:1}}
        refreshControl={
          <RefreshControl
            refreshing={false}
          />
        }
      >
        <Story></Story>
        <HotTopics></HotTopics>
        <CardsList></CardsList>
      </ScrollView>
    )
  }
}

const S = StyleSheet.create({

})
