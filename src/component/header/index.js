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
    height: 84,
    // overflow:'hidden',

  },
  bg: {
    position: 'absolute',
    width: '100%',
  },
  widgetWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingTop: 20,
    paddingHorizontal: 18,
  },
  buttonPress: {
    width: 29,
    height: 29,
    justifyContent: 'center',
  },
  logoText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
  }

})
