import {StyleSheet} from 'react-native';
import {theme} from '../../../theme/nexus.config';

export default StyleSheet.create({
  button: {
    backgroundColor: theme?.color?.primaryColor,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  text: {
    fontSize: theme?.fontSize?.md,
  },
});
