import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback
} from 'react-native';

import {
  getSize as sz,
  screenHeight,
  pickSize
} from '../../common/utils/sizeUtils';


export default class Header extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={style.header}>
        <Image
          source={require('./img/headerBG.png')}
          style={style.bg}
        />
        <View style={style.widgetWrap}>
          <TouchableWithoutFeedback>
            <Image
              style={style.buttonPress} source={require('./img/Burger_menu.png')}
            />
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View>
              <Text style={style.logoText}>Trimbo</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View style={style.buttonPress}>
              <Image
                resizeMode={'cover'}
                style={{alignSelf: 'flex-end'}}
                source={require('./img/search.png')}
              />
            </View>

          </TouchableWithoutFeedback>
        </View>

      </View>
    )
  }
}

const style = StyleSheet.create({
  header: {
    height: sz(84),
  },
  bg: {
    position: 'absolute',
  },
  widgetWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: sz(20),
    paddingHorizontal: sz(18),
  },
  buttonPress: {
    width: sz(29),
    height: sz(29),
    justifyContent: 'center',
  },
  logoText: {
    color: '#fff',
    fontSize: sz(18),
    fontWeight: '900',
  }

})
