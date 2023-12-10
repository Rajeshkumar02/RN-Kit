import {StyleSheet} from 'react-native';
import {FontSize, radius, weight} from '../../../theme/font';
import {theme} from '../../../theme/nexus.config';

export default StyleSheet.create({
  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    flex: 1,
    borderColor: theme?.color?.primaryText,
    borderRadius: radius?.sm,
    padding: 5,
    color: theme?.color.primaryText,
    marginTop: FontSize(2),
  },
  label: {
    color: theme?.color.primaryText,
    fontSize: FontSize(4.5),
    fontWeight: weight.regular,
  },
  iconContainer: {
    position: 'absolute',
    zIndex: 1,
    paddingTop: 10,
  },
  passwordIcon: {
    position: 'absolute',
    zIndex: 1,
    right: 10,
    paddingTop: 8,
  },
  input_underline: {
    borderBottomWidth: 1,
  },
  input_outlined: {
    borderWidth: 1,
  },
  error_text: {
    color: 'red',
    paddingBottom: FontSize(2),
    paddingTop: FontSize(1),
  },
});
