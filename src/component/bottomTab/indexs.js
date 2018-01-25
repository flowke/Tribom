import React, {Component} from 'react';
import {
  View,
  Text,
  TabBarIOS,
  StyleSheet,
} from 'react-native';

let {Item} = TabBarIOS;

export default class Bar extends Component{
  constructor(props){
      super(props);
  }

  render(){
    return (
      <View>

        <TabBarIOS
          barTintColor='blue'
          style={{
            // height: 299,
            backgroundColor: 'yellow'
          }}
        >

        </TabBarIOS>
      </View>
    )
  }
}
