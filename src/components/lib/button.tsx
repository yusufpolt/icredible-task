import React, { FC, PropsWithChildren } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle
} from 'react-native';

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
      {children}
    </TouchableOpacity>
  );
};

export default Button;
