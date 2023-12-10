import {Dimensions, Platform} from 'react-native';

const metrics = {
  screenWidth: Dimensions.get('window').width,
  screenHeight: Dimensions.get('window').height,
  statusBarHeight: Platform.OS === 'ios' ? 20 : 0,
};

export const RWidth = (percentage: number) => {
  const width = metrics.screenWidth;
  return (percentage / 100) * width;
};

export const RHeight = (percentage: number) => {
  const height = metrics.screenHeight;
  return (percentage / 100) * height;
};

export default metrics;
export const {screenWidth, screenHeight} = metrics;
