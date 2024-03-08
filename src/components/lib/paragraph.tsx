import {Colors} from '/constants';
import React, {FC} from 'react';
import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';

export type ParagraphProps = TextProps & {
  textStyle?: TextStyle;
  color?: string;
  size?: any;
  weight?: any;
};

const Paragraph: FC<ParagraphProps> = ({
  children,
  textStyle,
  color = Colors.text,
  size,
  weight,
  ...props
}): React.JSX.Element => {
  return (
    <Text
      style={[textStyle, {color: color, fontSize: size, fontWeight: weight}]}
      {...props}>
      {children}
    </Text>
  );
};

export default Paragraph;

const styles = StyleSheet.create({});
