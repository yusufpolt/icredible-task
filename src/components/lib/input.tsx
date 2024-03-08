import React, {FC} from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
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
      <Button style={styles.secureTextButton} onPress={toggleShowPassword}>
        <VectorIcons
          type="font-awesome"
          name={showPassword ? 'eye' : 'eye-slash'}
          size={24}
          color="#FFFFFF80"
        />
      </Button>
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
    borderWidth: 1,
    borderColor: '#FFFFFF1A',
    borderRadius: 12,
    backgroundColor: '#FFFFFF0D',
    height: 48,
  },
  input: {
    fontFamily: 'Satoshi',
    fontSize: 18,
    fontWeight: '400',
    color: '#fff',
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
