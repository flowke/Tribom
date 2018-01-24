
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableWithoutFeedback
} from 'react-native';

import {getSize as sz, screenWidth} from '../../common/utils/sizeUtils';

export default class BottonTab extends Component{
  constructor(props){
      super(props);
  }

  render(){
    return (
      <View style={S.tabBox}>

        <View style={S.barBG}>
          <View style={S.addWrapBG}/>
        </View>

        <View style={S.barWrap}>
          <View style={S.icons}>
            <View style={S.icon}>
              <View style={S.iconPicWrap}>
                <Image source={require('./img/home_normal.png')}/>
              </View>

              <Text style={S.iconText}>Home</Text>
            </View>
            <View style={S.icon}>
              <View style={S.iconPicWrap}>
                <Image source={require('./img/notification_normal.png')}/>
              </View>
              <Text style={S.iconText}>Notifications</Text>
            </View>

          </View>
          <View style={S.icons}>
            <View style={S.icon}>
              <View style={S.iconPicWrap}>
                <Image source={require('./img/setting_normal.png')}/>
              </View>

              <Text style={S.iconText}>Settings</Text>
            </View>
            <View style={S.icon}>
              <View style={S.iconPicWrap}>
                <Image source={require('./img/profile_normal.png')}/>
              </View>
              <Text style={S.iconText}>Profile</Text>
            </View>
          </View>
        </View>


        <TouchableWithoutFeedback>
          <Image
            source={require('./img/postButton_active.png')}
          />
        </TouchableWithoutFeedback>
      </View>
    )
  }
}


// 样式区

let barShadow = {
  shadowColor: '#3C4D84',
  shadowOffset: {width:0,height:-2},
  shadowOpacity: 0.14,
  shadowRadius: 10
};
let absoluteBottom = {
  position: 'absolute',
  bottom: 0,
  width: screenWidth,
}

const S = StyleSheet.create({
  tabBox: {
    ...absoluteBottom,
    height: 71,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff'
  },

  barBG: {
    ...absoluteBottom,
    height: 53,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    ...barShadow,
  },
  addWrapBG:{
    width: 71,
    height: 71,
    borderRadius: 71/2,
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    ...barShadow,
  },

  postButton:{
    width: 81,
    height: 81,
  },

  barWrap: {
    ...absoluteBottom,
    height: 53,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  icons: {
    flexDirection: 'row',
  },
  icon: {
    // flex:1,
    width: 66,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconPicWrap:{
    flex: 1,
    justifyContent: 'center',
    paddingTop: 5,
  },
  iconText: {
    height: 21,
    fontSize: 10,
    color: '#4E5969'
  }



});
