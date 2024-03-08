import {Colors} from '/constants';
import React, {FC, PropsWithChildren} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type ButtonProps = TouchableOpacityProps &
  PropsWithChildren & {
    loading?: boolean;
    buttonStyle?: ViewStyle;
    backgroundColor?: string;
  };

const Button: FC<ButtonProps> = ({
  children,
  loading,
  buttonStyle,
  backgroundColor,
  ...props
}): React.JSX.Element => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={loading}
      style={[buttonStyle, {backgroundColor: backgroundColor}]}
      {...props}>
      <LinearGradient
        colors={[Colors.primary, Colors.secondary]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={[buttonStyle, {justifyContent: 'center', alignItems: 'center'}]}>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
