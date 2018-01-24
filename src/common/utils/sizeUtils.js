import {
  PixelRatio,
  Dimensions
} from 'react-native';

// 设计图的 像素比
const dfPixelRatio = 2;

const {width, height} = Dimensions.get('window')

const pxRatio = PixelRatio.get();

function getSize(size) {
  return PixelRatio.getPixelSizeForLayoutSize(size/dfPixelRatio);
}

function pickSize(size={}, isTransform=true) {
  let sz = size[pxRatio] ? size[pxRatio] : 0;
  return isTransform? getSize(sz) : sz;
}

const thinLine = 1/pxRatio;

export {
  getSize,
  pickSize,
  width as screenWidth,
  height as screenHeight,
  thinLine,
}
