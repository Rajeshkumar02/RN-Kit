import {Text as Custtext} from 'react-native';
import {TextI} from './type';
import styles from './styles';
import {theme} from '../../../theme/nexus.config';
import {FontSize} from '../../../theme/font';

export default function Text(props: TextI) {
  return (
    <Custtext
      numberOfLines={props?.maxLine}
      ellipsizeMode={
        props?.truncatePossition ? props.truncatePossition : 'tail'
      }
      style={[
        styles?.text,
        {
          color: props?.color ? props?.color : theme?.color?.primaryText,
          fontSize:
            typeof props?.fz === 'number'
              ? FontSize(props?.fz)
              : props?.fz && theme?.fontSize[props?.fz],
        },
        props?.sx,
      ]}>
      {props?.children}
    </Custtext>
  );
}
