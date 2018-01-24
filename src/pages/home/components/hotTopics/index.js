
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList
} from 'react-native';

import {getSize as sz} from '../../../../common/utils/sizeUtils';

import data from './mockData';

export default class HotTopic extends Component{
  constructor(props){
      super(props);
  }

  render(){
    return (
      <View style={S.hotTopicBox}>
        {/* <Topic source={data[0].source}></Topic> */}
        <FlatList
          style={S.flatList}
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index)=>index}
          renderItem={({item})=>{
            return (
              <Topic
                source={item.source}
              />
            )
          }}
        />
      </View>
    )
  }
}

function Topic({source}){
  return (
    <View style={S.topicBox}>
      <Image
        {...{
          source,

        }}
      />

    </View>
  )
}


const S = StyleSheet.create({
  hotTopicBox: {
    height: 72,
    overflow: 'visible',
    marginLeft: 18,
    marginTop: 22,
    // marginBottom: 18
  },

  topicBox: {
    width: 153,
    height: 72,

    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14
  },
  flatList: {
    overflow: 'visible',
  }
});
