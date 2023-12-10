import {IconI} from './interface';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import {theme} from '../../../theme/nexus.config';

export default function Icons(props: IconI) {
  switch (props.family) {
    case 'AntDesign':
      return (
        <AntDesign
          size={props?.size ? props?.size : 12}
          name={props?.icon}
          color={props?.color ? props?.color : theme?.color.primaryText}
        />
      );
    case 'Entypo':
      return (
        <Entypo
          size={props?.size ? props?.size : 12}
          name={props?.icon}
          color={props?.color ? props?.color : theme?.color.primaryText}
        />
      );
    case 'EvilIcons':
      return (
        <EvilIcons
          size={props?.size ? props?.size : 12}
          name={props?.icon}
          color={props?.color ? props?.color : theme?.color.primaryText}
        />
      );
    case 'FontAwesome':
      return (
        <FontAwesome
          size={props?.size ? props?.size : 12}
          name={props?.icon}
          color={props?.color ? props?.color : theme?.color.primaryText}
        />
      );
    case 'FontAwesome5':
      return (
        <FontAwesome5
          size={props?.size ? props?.size : 12}
          name={props?.icon}
          color={props?.color ? props?.color : theme?.color.primaryText}
        />
      );
    case 'FontAwesome6':
      return (
        <FontAwesome6
          size={props?.size ? props?.size : 12}
          name={props?.icon}
          color={props?.color ? props?.color : theme?.color.primaryText}
        />
      );
    case 'Fontisto':
      return (
        <Fontisto
          size={props?.size ? props?.size : 12}
          name={props?.icon}
          color={props?.color ? props?.color : theme?.color.primaryText}
        />
      );
    case 'Foundation':
      return (
        <Foundation
          size={props?.size ? props?.size : 12}
          name={props?.icon}
          color={props?.color ? props?.color : theme?.color.primaryText}
        />
      );
    case 'Ionicons':
      return (
        <Ionicons
          size={props?.size ? props?.size : 12}
          name={props?.icon}
          color={props?.color ? props?.color : theme?.color.primaryText}
        />
      );
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons
          size={props?.size ? props?.size : 12}
          name={props?.icon}
          color={props?.color ? props?.color : theme?.color.primaryText}
        />
      );
    case 'MaterialIcons':
      return (
        <MaterialIcons
          size={props?.size ? props?.size : 12}
          name={props?.icon}
          color={props?.color ? props?.color : theme?.color.primaryText}
        />
      );
    case 'Octicons':
      return (
        <Octicons
          size={props?.size ? props?.size : 12}
          name={props?.icon}
          color={props?.color ? props?.color : theme?.color.primaryText}
        />
      );
    case 'SimpleLineIcons':
      return (
        <SimpleLineIcons
          size={props?.size ? props?.size : 12}
          name={props?.icon}
          color={props?.color ? props?.color : theme?.color.primaryText}
        />
      );
    case 'Zocial':
      return (
        <Zocial
          size={props?.size ? props?.size : 12}
          name={props?.icon}
          color={props?.color ? props?.color : theme?.color.primaryText}
        />
      );
    default:
      return null;
  }
}
