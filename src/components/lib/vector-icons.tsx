import React, {FC} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

const ICON_SETS: any = {
  'font-awesome': FontAwesome,
  'material-icons': MaterialIcons,
  'material-community-icons': MaterialCommunityIcons,
  'ant-design': AntDesign,
  entypo: Entypo,
  'evil-icons': EvilIcons,
  feather: Feather,
  foundation: Foundation,
  'ion-icons': Ionicons,
  'simple-line-icons': SimpleLineIcons,
  'oct-icons': Octicons,
  zocial: Zocial,
  'font-isto': Fontisto,
};

type VectorIconsProps = {
  type:
    | 'font-awesome'
    | 'material-icons'
    | 'material-community-icons'
    | 'ant-design'
    | 'entypo'
    | 'evil-icons'
    | 'feather'
    | 'foundation'
    | 'ion-icons'
    | 'simple-line-icons'
    | 'oct-icons'
    | 'zocial'
    | 'font-isto';
  name: string;
  size: number;
  color: string;
};

const VectorIcons: FC<VectorIconsProps> = ({
  type,
  name,
  size,
  color,
  ...props
}): React.JSX.Element => {
  const IconSet = ICON_SETS[type] || ICON_SETS.FontAwesome;
  return <IconSet name={name} size={size} color={color} {...props} />;
};

export default VectorIcons;
