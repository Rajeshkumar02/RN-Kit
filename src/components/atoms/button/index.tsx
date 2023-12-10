import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {ButtonI} from './type';
import {theme} from '../../../theme/nexus.config';
import ButtonStyle from './styles';
import {radius} from '../../../theme/font';

export function Button(props: ButtonI) {
  function getButtonTypeStyles(type?: ButtonI['variant']): ViewStyle {
    switch (type) {
      case 'outline':
        return {
          borderWidth: 1,
          borderColor: props?.color ? props?.color : theme?.color?.primaryColor,
          backgroundColor: 'transparent',
        };
      case 'filled':
        return {
          backgroundColor: props?.color
            ? props?.color
            : theme?.color?.primaryColor,
        };
      case 'transparent':
        return {
          backgroundColor: 'transparent',
        };
      case 'light':
        return {
          backgroundColor: props?.color
            ? props?.color
            : theme?.color?.primaryColor,
          opacity: 0.3,
        };
      case 'link': {
        return {
          backgroundColor: 'transparent',
        };
      }
      default:
        return {
          backgroundColor: props?.color
            ? props?.color
            : theme?.color?.primaryColor,
        };
    }
  }

  const mergedStyles = StyleSheet.create({
    button: {
      borderRadius: props?.radius
        ? typeof props?.radius === 'number'
          ? props?.radius
          : radius[props?.radius || 'md']
        : radius['md'],
      justifyContent: props?.justify ? props?.justify : 'center',
      ...ButtonStyle?.button,
      ...getButtonTypeStyles(props?.variant),
      ...(props?.disabled ? {backgroundColor: 'rgba(29, 27, 32, 0.3)'} : {}),
      ...props?.sx?.button,
    },
    text: {
      ...ButtonStyle?.text,
      color:
        props?.variant === 'outline'
          ? theme?.color?.primaryColor
          : props?.variant === 'link'
          ? props?.color
            ? props?.color
            : theme?.color?.primaryColor
          : props?.variant === 'transparent'
          ? theme?.color?.primaryColor
          : props?.variant === 'light'
          ? props?.color
            ? props?.color
            : theme?.color?.primaryText
          : theme?.color?.secondaryColor,

      fontWeight: props?.variant === 'light' ? '600' : '400',

      textDecorationLine: props?.variant === 'link' ? 'underline' : 'none',
      ...props?.sx?.buttonText,
    },
  });

  return (
    <TouchableOpacity
      disabled={props?.disabled}
      onPress={props?.onClick}
      onLongPress={props?.onLongPress}
      style={{...mergedStyles?.button}}>
      {props?.leftIcon && props?.leftIcon}
      <Text style={mergedStyles?.text}>{props?.children}</Text>
      {props?.rightIcon && props?.rightIcon}
    </TouchableOpacity>
  );
}
