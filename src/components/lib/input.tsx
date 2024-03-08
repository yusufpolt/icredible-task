import React, {FC} from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Button from './button';
import Paragraph from './paragraph';
import VectorIcons from './vector-icons';
import {useSecureTextEntry} from '/hooks';
import {Colors} from '/constants';

type InputProps = TextInputProps & {
  label?: string;
  errorText?: string;
  containerStyle?: ViewStyle;
  contentRight?: JSX.Element;
  hidePassword?: boolean;
};

const Input: FC<InputProps> = ({
  label,
  errorText,
  containerStyle,
  contentRight,
  hidePassword,
  ...props
}): React.JSX.Element => {
  const {showPassword, toggleShowPassword} = useSecureTextEntry();

  let rightComponent;

  if (hidePassword) {
    rightComponent = (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.secureTextButton}
        onPress={toggleShowPassword}>
        <VectorIcons
          type="feather"
          name={showPassword ? 'eye' : 'eye-off'}
          size={26}
          color={'#808080'}
        />
      </TouchableOpacity>
    );
  } else {
    rightComponent = contentRight;
  }

  return (
    <View style={containerStyle}>
      {label ? (
        <Paragraph color={Colors.text} textStyle={styles.label}>
          {label}
        </Paragraph>
      ) : null}
      <View style={styles.container}>
        <TextInput
          style={[
            styles.input,
            {width: contentRight || hidePassword ? '70%' : '100%'},
          ]}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={'#FFFFFF80'}
          secureTextEntry={hidePassword ? !showPassword : false}
          {...props}
        />
        {rightComponent}
      </View>
      {errorText ? (
        <Paragraph
          color={Colors.secondary}
          size={12}
          textStyle={styles.errorText}>
          {errorText}
        </Paragraph>
      ) : null}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 6,
    borderWidth: 1.4,
    borderColor: Colors.gray,
    borderRadius: 12,
    backgroundColor: 'white',
    height: 52,
  },
  input: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.text,
    height: '100%',
  },
  errorText: {
    position: 'absolute',
    left: 10,
    bottom: -18,
    fontWeight: '400',
  },
  secureTextButton: {
    right: 10,
  },
});
