import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  PixelRatio,
  FlatList,
} from 'react-native';

import {getSize as sz} from '../../../../common/utils/sizeUtils';

import storyData from './storyData';

export default class Story extends Component{
  constructor(props){
    super(props);
  }

  _renderList = ({item, separators, index})=>{
    let {name, source} = item;

    return (
      <View
        style={S.oneStory}
      >

        <View style={S.avatarWrap}>
          <Image
            source={source}
            style={S.avatar}
          />
        </View>
        <Text style={S.userName}>{name}</Text>
      </View>
    );
  }

  render(){
    return (
      <View style={S.box}>

        <View style={[S.oneStory, S.takePhoto]}>

          <View style={S.avatarWrap}>
            <Image
              source={require('./img/Take_photo.png')}
              style={S.avatar}
            />
          </View>
          <Text style={S.userName}>name</Text>
        </View>

        <View style={S.line}/>

        <View style={S.listWrap}>
          <FlatList
            style={S.list}
            horizontal
            showsHorizontalScrollIndicator={false}
            {...{

              data: storyData,
              renderItem: this._renderList
            }}
          >

          </FlatList>
        </View>

      </View>
    )
  }
}

const S = StyleSheet.create({
  box:{
    flexDirection: 'row',
    height: sz(75),
    marginLeft: sz(18),
    marginTop: sz(18),
    paddingTop: sz(6),
    // backgroundColor: 'red',
  },

  line: {
    height: sz(45),
    width: sz(1),
    backgroundColor: '#979797',
    marginHorizontal: sz(16),
    opacity: 0.21

  },

  listWrap: {
    flex: 1,
    // backgroundColor: 'red'
    // overflow: 'hidden',
  },

  list: {
    // flexDirection: 'row',
    // overflow: 'visible',

  },

  oneStory: {
    justifyContent: 'space-between',
    // backgroundColor: 'grey',
    marginRight: sz(19),
    width: sz(45),
  },
  takePhoto: {
    marginRight: 0,
  },
  avatarWrap:{
    justifyContent: 'center',
    alignItems: 'center',
    width: sz(45),
    height: sz(45),
    // shadowColor: '#4055C4',
    // shadowOffset: {width:0,height: -2},
    // shadowRadius: 14,
    // shadowOpacity: 0.14,
  },
  avatar: {
    width: sz(45),
    height: sz(45),
    borderRadius: sz(3.6),

  },
  userName: {
    fontSize: sz(10),
    color: '#4E5969',
    textAlign: 'center',
  },
})
