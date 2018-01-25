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
        <Card></Card>
        <Card></Card>
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

      {/* post textContent */}
      <Text style={S.textContent}>{props.textContent}</Text>

      {/* separateLine */}
      <View style={S.separateLine}></View>

      {/* subInfo */}
      <View style={S.subInfo}>
        <View style={S.subInfoItem}>
          <Image
            style={S.subInfoItemIcon}
            source={require('./img/Likes.png')}
          />
          <Text style={S.subInfoItemText}>{392} Likes</Text>
        </View>
        <View style={S.subInfoItem}>
          <Image
            style={S.subInfoItemIcon}
            source={require('./img/Comments.png')}
          />
          <Text style={S.subInfoItemText}>{392} Comments</Text>
        </View>
      </View>

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
    marginTop: 18,
    marginHorizontal: 18,
  },

  cardBox: {
    // height: 100,
    marginBottom: 16,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 14,
    paddingLeft: 18,
    backgroundColor: '#fff',
    borderRadius: 6,
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
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarWrap: {
    paddingRight: 12,
  },
  avatar: {
    borderRadius: 6,
  },
  userInfo: {
    justifyContent: 'flex-end',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4E5969'
  },
  timeWrap: {
    marginTop: 5,
    flexDirection: 'row',
  },
  time: {
    lineHeight: 14,
    fontSize: 12,
    color: '#4E5969',
    opacity: 0.6,
    marginLeft: 6,
  },
  textContent: {
    color: '#4E5969',
    fontSize: 14,
    marginTop: 13,
    lineHeight: 22,
  },
  postPhotoBox:{
    marginTop: 13,

  },
  postPhoto: {
    borderRadius: 4,
  },
  separateLine: {
    borderWidth: thinLine,
    borderColor: '#979797',
    opacity: 0.15,
    marginVertical: 12,
  },
  subInfo: {
    height: 14,
    flexDirection: 'row',

  },
  subInfoItem: {
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subInfoItemIcon: {
    marginRight: 8
  },
  subInfoItemText: {
    fontSize: 12,
    color: '#4E5969'
    // lineHeight: 14
  }
})
