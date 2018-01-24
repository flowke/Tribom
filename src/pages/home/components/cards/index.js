import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import {getSize as sz, thinLine} from '../../../../common/utils/sizeUtils';

export default class CardsList extends Component{
  constructor(props){
      super(props);
  }

  render(){
    return (
      <View style={S.cardsList}>
        <Card></Card>
      </View>

    )
  }
}


function Card(props){

  return (
    <View style={S.cardBox}>
      {/* cardHeader */}
      <View style={S.cardHeader}>
        <View style={S.avatarWrap}>
          <Image
            source={props.avatarSource}
            style={S.avatar}
          />
        </View>
        <View style={S.userInfo}>
          <Text style={S.name}>{props.name}</Text>
          <View style={S.timeWrap}>
            <Image source={require('./img/time.png')}/>
            <Text style={S.time}>{props.time}</Text>
          </View>

        </View>
        <View style={S.shareButton}>
          <Image
            source={require('./img/Share.png')}
          />
        </View>
      </View>

      {/* separateLine */}

      <View style={S.separateLine}></View>

    </View>
  )
}
Card.defaultProps = {
  avatarSource: require('./img/a2.png'),
  name: 'Daniyal Smith',
  time: 'Just now',
  textContent: 'Design is not just what it looks like and feels like. Design is how it works',
  likes: 0,
  comments: 0
}


const S = StyleSheet.create({
  cardsList: {
    marginTop: sz(18),
    marginHorizontal: sz(18),
  },

  cardBox: {
    height: 100,
    paddingTop: sz(16),
    paddingRight: sz(16),
    paddingBottom: sz(14),
    paddingLeft: sz(18),
    backgroundColor: '#fff',
    borderRadius: sz(6),
    borderWidth: thinLine,
    borderColor: 'rgba(151,151,151,0.08)',
    shadowColor: '#4F5EA3',
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: {width:0, height:0}
  },
  cardHeader: {
    flexDirection: 'row',
  },
  shareButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: sz(28),
    height: sz(28),
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarWrap: {
    paddingRight: sz(12),
  },
  avatar: {
    borderRadius: sz(6),
  },
  userInfo: {
    justifyContent: 'flex-end',
  },
  name: {
    fontSize: sz(14),
    fontWeight: 'bold',
    color: '#4E5969'
  },
  timeWrap: {
    marginTop: sz(5),
    flexDirection: 'row',
  },
  time: {
    lineHeight: sz(14),
    fontSize: sz(12),
    color: '#4E5969',
    opacity: 0.6,
    marginLeft: sz(6),
  },
  separateLine: {
    borderWidth: thinLine,
    borderColor: '#979797',
    opacity: 0.15
  }
})
